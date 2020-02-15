import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxMenuModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import { DxResponsiveBoxModule } from "devextreme-angular";

import { ThemeService } from './services/theme.service';
import { EvaluationComponent } from './dashboard/evaluation/evaluation.component';
@NgModule({
  declarations: [
    AppComponent,EvaluationComponent
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,   DxMenuModule,
    DxSelectBoxModule,
    DxCheckBoxModule,DxResponsiveBoxModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
