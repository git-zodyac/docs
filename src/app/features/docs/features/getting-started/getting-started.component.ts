import { Component } from '@angular/core';
import { provideTranslocoScope } from '@ngneat/transloco';

const module_0 = `import { Module } from '@zodyac/core';
import { zEnv } from 'env.z';

export class FirstModule extends Module<typeof zEnv> {}
`;

const module_1 = `import { Module } from '@zodyac/core';
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
`;

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

@Component({
  selector: 'article[getting-started]',
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
  providers: [provideTranslocoScope('getstarted')],
})
export class GettingStartedComponent {
  module_or = module_0;
  module_lc = module_1;
  deps = deps_0;
  root = deps_root;
}
