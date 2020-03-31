import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from 'src/app/http-error-handler.service';
import { Course } from './StudentModels/Student';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class CourseService {
  apiUrl = 'http://localhost:53431/api/Course/';  // URL to web api

  //
  private handleError: HandleError;
    constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('StudentService');
  }

  /** GET heroes from the server */
  getCourses(): Observable<any> {

    return this.http.get<any>(this.apiUrl + "Courses")
      .pipe(
      
        catchError(this.handleError('getStudents', []))
      );

   
  }

}


