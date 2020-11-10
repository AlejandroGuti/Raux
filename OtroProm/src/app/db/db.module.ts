import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DBRoutingModule} from './db-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {DBComponent} from './Component/db.component';


@NgModule({
  declarations:
  [
    DBComponent
  ],
  imports:
  [
    CommonModule,
    HttpClientModule,
    DBRoutingModule
  ]
})
export class DBModule { }
