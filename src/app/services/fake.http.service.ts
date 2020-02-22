import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Hero } from '../hero.service';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class FakeHttpService {

    constructor(private http: HttpClient) {

    }

    /** GET heroes from the server */
    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>("assets/data.json")
            .pipe(
                //catchError(this.handleError('getHeroes', []))
            );
    }


}


