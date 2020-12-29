import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
  },
  //{
  //   path: '404',
  //   loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  // },
  // {
  //   path: '**', redirectTo: '/404'
  // }
];

