import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxMenuModule, DxSelectBoxModule, DxCheckBoxModule, DxBulletModule, DxTemplateModule, DxDataGridModule } from 'devextreme-angular';
import { DxResponsiveBoxModule } from "devextreme-angular";

import { ThemeService } from './services/theme.service';
import { EvaluationComponent } from './dashboard/evaluation/evaluation.component';
import { httpInterceptorProviders } from './http-interceptors';
import { DashboardService } from './dashboard/dashboard.service';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';

import { StudentModule } from './Student/student.module';
@NgModule({
  declarations: [
    AppComponent,EvaluationComponent, 
  ],
  imports: [
    BrowserModule,
   HttpClientModule,
    AppRoutingModule,   DxMenuModule,
    DxSelectBoxModule,
    DxCheckBoxModule,DxResponsiveBoxModule,
    StudentModule
  ],
  providers: [ httpInterceptorProviders,    
              ThemeService ,DashboardService,MessageService,HttpErrorHandler
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
