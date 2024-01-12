import { Component } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';

const deps_0 = `import { Module, Provide } from '@zodyac/core';
import { zEnv } from 'env.z';

@Provide(SecondModule)
export class FirstModule extends Module<typeof zEnv> {}
`;

const deps_root = `import { App } from '@zodyac/core';
import { zEnv } from 'env.z';
import { FirstModule } from 'modules/first/first.module';

export const app = new App({
  env: zEnv,
  providers: [FirstModule],
});
`;

const dep_value = `import { App, Provide } from '@zodyac/core';
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
`;

const dep_factory = `import { App, Provide } from '@zodyac/core';
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
`;

const dep_class = `import { App, Provide } from '@zodyac/core';
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
`;

@Component({
  selector: 'article[providers]',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss',
  providers: [provideTranslocoScope('providers')],
})
export class ProvidersComponent {
  deps = deps_0;
  root = deps_root;

  dep_value = dep_value;
  dep_factory = dep_factory;
  dep_class = dep_class;
}
