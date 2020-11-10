import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {DBComponent} from './Component/db.component';

const routes: Routes = [
  {
    path: '',
    component: DBComponent,
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule
    ]
  })
export class DBRoutingModule { }
