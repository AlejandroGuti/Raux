import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CalcAverageComponent} from './calc-average/calc-average.component';

import {SharedModule} from './../shared/shared.module';
import {CalcAverageRoutingModule} from './calc-average-routing.module';
import {MaterialModule} from './../material/material.module';
import {FormsModule} from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CalcAverageComponent,
  ],
  imports: [
    CommonModule,
    CalcAverageRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    ChartsModule
  ]
  })
export class CalcAverageModule { }
