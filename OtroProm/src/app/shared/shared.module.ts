import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AveragePipe } from './pipes/average/average.pipe';
import {MaterialModule} from './../material/material.module';
import { SumPipe } from './pipes/sumArray/sum.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AveragePipe,
    SumPipe,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AveragePipe,
    SumPipe,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
