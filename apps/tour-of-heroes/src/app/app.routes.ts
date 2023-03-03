import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: `${environment.DASHBOARD_MICROAPP_ORIGIN}/remoteEntry.js`,
        type: 'module',
        exposedModule: './Module',
      }).then((m) => m.DashBoardModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: `${environment.HEROES_MICROAPP_ORIGIN}/remoteEntry.js`,
        type: 'module',
        exposedModule: './Module',
      }).then((m) => m.HeroesModule),
  },
  {
    path: 'messages',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './messages-wc',
      remoteName: 'messages_microapp',
      elementName: 'messages-element',
    } as WebComponentWrapperOptions,
  },
];
