# Providers

Zodyac provides a simple dependency injection mechanism, which allows you to manage relationships between modules and their lifecycles.

## Introduction

Zodyac organizes your code into modules and manages their dependencies. You can add dependencies to your module by adding `@Provide` decorator to the constructor:

```typescript
import { Module, Provide } from '@zodyac/core';
import { SecondModule } from 'modules/second/second.module';
import { zEnv } from 'env.z';

@Provide(SecondModule)
export class FirstModule extends Module<typeof zEnv> {}
```

If you want to add multiple dependencies, you can also use `@Providers` decorator:

```typescript
import { Module, Provide } from '@zodyac/core';
import { SecondModule } from 'modules/second/second.module';
import { ThirdModule } from 'modules/third/third.module';
import { zEnv } from 'env.z';

@Provide([SecondModule, ThirdModule])
export class FirstModule extends Module<typeof zEnv> {}
```

`Application` is the very root module of your project. It is the only module that is not being provided to any other module. In case you want to provide several dependencies to it, you might want to add them to the `providers` property of the `App` constructor:

```typescript
import { App } from '@zodyac/core';
import { FirstModule } from 'modules/first/first.module';
import { SecondModule } from 'modules/second/second.module';
import { zEnv } from 'env.z';

export const app = new App({
  env: zEnv,
  providers: [FirstModule, SecondModule],
});
```

## Provider options

There are several options to provide a dependency to your module.

### Direct usage

You can use module constructor directly as a dependency:

```typescript
import { App } from '@zodyac/core';
import { zEnv } from 'env.z';
import { FirstModule } from 'modules/first/first.module';

export const app = new App({
  env: zEnv,
  providers: [FirstModule],
});
```

### Using value

You can use existing instance as a dependency:

```typescript
import { App, Provide } from '@zodyac/core';
import { zEnv } from 'env.z';
import { FirstModule } from 'modules/first/first.module';

const instance = new FirstModule();

export const app = new App({
  env: zEnv,
  providers: [
    {
      module: FirstModule,
      value: instance,
    },
  ],
});
```

### Using (async) factory

Use a factory (async) function to create a dependency. Factory function is called only once and the result is cached:

```typescript
import { App, Provide } from '@zodyac/core';
import { zEnv } from 'env.z';
import { FirstModule } from 'modules/first/first.module';

export const app = new App({
  env: zEnv,
  providers: [
    {
      module: FirstModule,
      factory: async () => new FirstModule(),
    },
  ],
});
```

### Using class

You can use a different compatible class as a dependency. It will be instantiated automatically:

```typescript
import { App, Provide } from '@zodyac/core';
import { zEnv } from 'env.z';
import { FirstModule } from 'modules/first/first.module';
import { TestModule } from 'modules/first/test.module';

export const app = new App({
  env: zEnv,
  providers: [
    {
      module: FirstModule,
      class: TestModule,
    },
  ],
});
```

## Referencing dependencies

You can reference dependencies in your module by calling ```this.require(...)``` which accepts a constructor of the module you want to reference:

```typescript
import { Module } from "@zodyac/core";
import { zEnv } from "env.z";

import { SecondModule } from "modules/second/second.module";

export class FirstModule extends Module<typeof zEnv> {
  second!: SecondModule;

  onInit = async () => {
    this.logger.info("First module onInit");
    this.second = await this.require(SecondModule);
  };

  onReady = async () => {
    this.logger.info("First module onReady");
    this.logger.info(this.second.data);
  };
}
```

Best prectice is to require your dependencies in `onInit`, but if you need to require them in `onReady` or `onStart`, you can do it as well, just keep in mind, that all the module's [Lifecycle hooks](/docs/lifecycle)  are called immidiately one after each other (asyncwise).
