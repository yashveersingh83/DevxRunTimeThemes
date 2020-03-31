import { Component, OnInit, Input } from '@angular/core';
import { Student, StudentDisEnrollMent } from '../StudentModels/Student';

@Component({
  selector: 'app-dis-enroll-student',
  templateUrl: './dis-enroll-student.component.html',
  styleUrls: ['./dis-enroll-student.component.css']
})
export class DisEnrollStudentComponent implements OnInit {

  constructor() { }

  @Input('selectedStudent') selectedStudent: Student;
  @Input('selectedCourseId') selectedCourseId: number;
  ngOnInit() {

  }
  DisEnroll(data: any) {

    var dto = new StudentDisEnrollMent(this.selectedCourseId, this.selectedStudent.id, "Test angular");

    //  this.studentService.disenrollStudent(dto);


  }

}
