import { Routes } from '@angular/router';
import { ToolboxComponent } from './features/toolbox/toolbox.component';
import { ZodEnvComponent } from './features/zod-env/zod-env.component';
import { ZodExpressComponent } from './features/zod-express/zod-express.component';
import { ZodMongooseComponent } from './features/zod-mongoose/zod-mongoose.component';
import { provideTranslocoScope } from '@ngneat/transloco';

export const routes: Routes = [
  {
    path: '',
    title: 'Toolbox | Zodyac',
    providers: [provideTranslocoScope('toolbox')],
    component: ToolboxComponent,
  },
  {
    path: 'zod-env',
    title: 'Zod environment | Zodyac',
    providers: [provideTranslocoScope('zodenv')],
    component: ZodEnvComponent,
  },
  {
    path: 'zod-express',
    title: 'Zod for Express.js | Zodyac',
    providers: [provideTranslocoScope('zodexpress')],
    component: ZodExpressComponent,
  },
  {
    path: 'zod-mongoose',
    title: 'Zod to Mongoose | Zodyac',
    providers: [provideTranslocoScope('zodmongoose')],
    component: ZodMongooseComponent,
  },
];
