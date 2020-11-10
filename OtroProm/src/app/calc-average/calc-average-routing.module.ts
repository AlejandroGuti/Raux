import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CalcAverageComponent } from './calc-average/calc-average.component';



const routes: Routes = [
  {
    path: '',
    component: CalcAverageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class CalcAverageRoutingModule {}

