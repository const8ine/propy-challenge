import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./components/pages/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '404',
    loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '**', redirectTo: '/404'
  }
];

