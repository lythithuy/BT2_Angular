import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Baitap2Component } from './baitap2.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [ Baitap2Component],
  exports: [Baitap2Component],
  imports: [
    CommonModule,NgxPaginationModule
  ]
})



export class Baitap2Module { }
