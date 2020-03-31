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
import { Student, StudentDisEnrollMent, EditStudentDto, Course, CourseTransfer } from '../StudentModels/Student';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { strictEqual } from 'assert';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentDataSource$: Student[];
  editInfopopupVisible = false;
  disEnrollPopupVisible = false;
  selectedStudent: Student;
  selectedCourseId: number;
  collapsed = false;
  currentCourseValue:number;
  CurrentCourseTitle:string;
  newCourseValue:string;
  courseList$:Course[];
  transferPopupVisible=false;

  selectedCourseForTransfer:number;
  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(["EnviroCare"]);
    }
  }
  constructor(private studentService: StudentService  ,  private courseService:CourseService  ) {

    this.studentService.getStudents()
      .subscribe(result => {
        this.studentDataSource$ = result.result;
        
      }
      );
     
  }

  ngOnInit() {

  }
  disEnroll(event: any, data: any) {
    console.log(data.key.email);
  }
 
  UpdateInforamtion(data: Student) {
    
    let editStudentDto: EditStudentDto = {
      "firstName": data.firstName,
      lastName: data.lastName, studentId: data.id,
    };
    console.log(editStudentDto);
    this.studentService.editpersonalinformation(editStudentDto);
  }
  editInfo(data: any) {
    this.selectedStudent = this.studentDataSource$.filter(x => x.email === data.key.email)[0];
    this.editInfopopupVisible = true;
    console.log(' editInfo ' + data);

  }

  closeEditPopup() {
    this.editInfopopupVisible = false;
  }
 /*  DisEnroll(data: any) {

    debugger;
    var dto = new StudentDisEnrollMent(this.selectedCourseId, this.selectedStudent.id, "Test angular");

    //  this.studentService.disenrollStudent(dto);


  } */
  DisEnrollPopup(selectedCourseId: any) {

   
    this.selectedCourseId = selectedCourseId;
    this.selectedStudent = this.studentDataSource$.
      filter(x => (x.course1ID === selectedCourseId || x.course2ID === selectedCourseId))[0];

    console.log(' selectedCouseName ' + selectedCourseId);
    this.disEnrollPopupVisible = true;


  }
  closedisEnrollPopupVisible() {
    this.disEnrollPopupVisible = false;
  }


  transferCourse( studentId: number, currentCourse: number) {
    console.log(currentCourse);
    this.courseService.getCourses() .subscribe(result => {
      this.courseList$ =     result.result;
      this.CurrentCourseTitle = this.courseList$.filter( c=>c.courseID === currentCourse )[0].title;
      console.log(JSON.stringify(this.courseList$));
      
    }
    );
    this.transferPopupVisible = true;
    this.currentCourseValue = currentCourse;
    this.selectedStudent = this.studentDataSource$.filter(x => (x.id === studentId))[0];
       
  }
  transfer ( selectedStudent:any, newCourseID :number)
  {
    console.log(  selectedStudent + ':::' + newCourseID   );

    let transferCourseDto: CourseTransfer = {
      
       studentId: selectedStudent.id,
       newCourseID : newCourseID,
       currentCourseID:this.currentCourseValue

    };
    console.log(transferCourseDto);

    this.studentService.transferCourse(transferCourseDto);
  }
}
