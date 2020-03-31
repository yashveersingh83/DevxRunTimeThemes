import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from 'src/app/http-error-handler.service';
import { Student, StudentDisEnrollMent, EditStudentDto, CourseTransfer } from './StudentModels/Student';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class StudentService {
  //apiUrl = 'http://localhost:53431/api/';  // URL to web api
  apiUrl = 'http://localhost:96/api/';  // URL to web api

  //
  private handleError: HandleError;
    constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('StudentService');
  }

  /** GET heroes from the server */
  getStudents(): Observable<any> {

    return this.http.get<any>(this.apiUrl + "Student/Courses")
      .pipe(
      
        catchError(this.handleError('getStudents', []))
      );

    // return this.http.get<Student[]>("assets/student.json")
    //   .pipe( 
    //     catchError(this.handleError('getStudents', []))
    //   );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  disenrollStudent(disnrollDto: StudentDisEnrollMent) {
    httpOptions.headers =
      httpOptions.headers.set('Content-Type', 'application/json');
    var url = this.apiUrl + "Student/enrollments/unregistercourse";
    return this.http.post(url, disnrollDto, httpOptions)
    .pipe(
      catchError(this.handleError('updateHero', disnrollDto))
    );
    
    
  }

  editpersonalinformation(studentDto: EditStudentDto) {

    debugger;
    httpOptions.headers =
      httpOptions.headers.set('Content-Type', 'application/json');
    var url = this.apiUrl + "Student/editpersonalinformation";
    return this.http.post(url, studentDto, httpOptions)  .pipe(
      catchError(this.handleError('editpersonalinformation', JSON.stringify(studentDto)  ))
    ).subscribe();
    
  }

  transferCourse( transferDto:CourseTransfer )
  {
    httpOptions.headers =
    httpOptions.headers.set('Content-Type', 'application/json');
  var url = this.apiUrl + "Student/transferCourse";
  return this.http.post(url, transferDto, httpOptions)  .pipe(
    catchError(this.handleError('editpersonalinformation', JSON.stringify(transferDto)  ))
  ).subscribe();
  }

}


