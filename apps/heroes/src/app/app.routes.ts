import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'heroes',
  },
  {
    path: 'heroes',
    loadChildren: async () =>
      (await import('./heroes/heroes.module')).HeroesModule,
  },
];
