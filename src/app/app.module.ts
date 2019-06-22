import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Baitap2Module} from './baitap2/baitap2.module';



@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, Baitap2Module, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
