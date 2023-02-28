import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        type: 'module',
        exposedModule: './Module',
      }).then((m) => m.DashBoardModule),
  },
];
