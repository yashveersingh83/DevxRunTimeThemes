import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DxMenuModule, DxSelectBoxModule, DxCheckBoxModule, DxBulletModule, DxTemplateModule, DxDataGridModule, DxPopupModule, DxFormModule, DxButtonModule, DxTextAreaModule } from 'devextreme-angular';
import { DxResponsiveBoxModule } from "devextreme-angular";


import { HttpClientModule } from '@angular/common/http';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';
import { DisEnrollStudentComponent } from './dis-enroll-student/dis-enroll-student.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
     StudentListComponent, StudentRegisterComponent, EnrollStudentComponent, DisEnrollStudentComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule,DxPopupModule,
   DxFormModule,
   DxButtonModule,
    DxMenuModule,
    DxSelectBoxModule,
    DxCheckBoxModule,DxResponsiveBoxModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxTextAreaModule
  ],
  providers:[StudentService]
})
export class StudentModule { }
