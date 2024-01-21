# Module lifecycle

Learn about the lifecycle of a module and how to use it to your advantage.

## Introduction

A module lifecycle is a set of events that are triggered when a module is initialized, ready, started, and destroyed. These events can be used to perform actions at specific times in the module's lifespan.

```typescript
import { Module } from '@zodyac/core';
import { zEnv } from 'env.z';

export class FirstModule extends Module<typeof zEnv> {
  onInit = () => {
    // do something when module is initialized
  }

  onReady = () => {
    // do something when module is ready
  }

  onStart = () => {
    // do something when module is started
  }

  onDestroy = () => {
    // do something when module is destroyed
  }
}
```

Lifecycle hooks are called from bottom (`children`) to top (`Parent`). The `Parent` module's hook is being called only **AFTER** calling it's `Children` hooks. So the `Parent` module is initialized only when it made sure to initialize it's `Children` modules.


```typescript
import { Module, Provide } from '@zodyac/core';
import { zEnv } from 'env.z';

@Provivide(ChildModule)
export class ParentModule extends Module<typeof zEnv> {
  onInit = () => {
    console.log('Parent onInit is fired second');
  }

  onReady = () => {
    console.log('Parent onReady is fired second');
  }

  onStart = () => {
    console.log('Parent onStart is fired second');
  }

  onDestroy = () => {
    console.log('Parent onDestroy is fired second');
  }
}

export class ChildModule extends Module<typeof zEnv> {
  onInit = () => {
    console.log('Child onInit is fired first');
  }

  onReady = () => {
    console.log('Child onReady is fired first');
  }

  onStart = () => {
    console.log('Child onStart is fired first');
  }

  onDestroy = () => {
    console.log('Child onDestroy is fired first');
  }
}
```

So what you see in console when you run this code is:

1. `Child` `onInit` is fired first
2. `Parent` `onInit` is fired second
3. `Child` `onReady` is fired first
4. `Parent` `onReady` is fired second
5. `Child` `onStart` is fired first
6. `Parent` `onStart` is fired second
7. `Child` `onDestroy` is fired first
8. `Parent` `onDestroy` is fired second
