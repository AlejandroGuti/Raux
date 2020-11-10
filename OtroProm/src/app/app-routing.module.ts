import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {LayoutComponent} from './layout/layout.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: '/calc-average',
          pathMatch: 'full'
        },
        {
          path: 'calc-average',
          loadChildren: () => import('./calc-average/calc-average.module').then (m => m.CalcAverageModule)
        },
        {
          path: 'db',
          loadChildren: () => import('./db/db.module').then (m => m.DBModule)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
