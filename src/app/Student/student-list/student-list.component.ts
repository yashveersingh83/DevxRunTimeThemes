import { Component, OnInit } from '@angular/core';
import {
  DxDataGridModule,
  DxBulletModule,
  DxPopupModule,
  DxButtonModule,
  DxFormModule,
  DxTemplateModule,
  DxTextAreaModule
} from 'devextreme-angular';
import { Student } from '../StudentModels/Student';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { strictEqual } from 'assert';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentDataSource$: Student[];
  editInfopopupVisible =false;
  disEnrollPopupVisible =false;
  selectedStudent:Student;
  collapsed = false;
  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(["EnviroCare"]);
    }
  }
  constructor(private studentService: StudentService) {

    this.studentService.getStudents()
      .subscribe(
        data => {
          this.studentDataSource$ = data;
          console.log(JSON.stringify(data));
        }
      );
  }

  ngOnInit() {

  }
  disEnroll(event: any ,data: any )
  {
    console.log(data.key.Email);
  }
  transferCourse(event: any ,data: any )
  {
     this.selectedStudent = this.studentDataSource$.filter(x=>x.Email === data.key.Email )[0];
    console.log(this.selectedStudent);
    this.editInfopopupVisible = true;
    
  }
  UpdateInforamtion(data :any)
  {
    console.log(data  );
  }
  editInfo(data:any)
  {
    console.log(' editInfo '+ data  );
  }

  closeEditPopup()
  {
    this.editInfopopupVisible = false;
  }
  DisEnroll(data:any )
  {
    
    console.log(' DisEnroll '+ data  );
  }
  DisEnrollPopup(data:any)
  {
    this.disEnrollPopupVisible = true;

  }
  closedisEnrollPopupVisible()
  {
    this.disEnrollPopupVisible = false;
  }
}
