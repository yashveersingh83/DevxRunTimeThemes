import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RequestParameterInterceptor } from './request-parameter-interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeHttpService } from '../services/fake.http.service';
import { DashboardService } from '../dashboard/dashboard.service';

describe(`RequestParamterInterceptor`, () => {
    let service: DashboardService;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            DashboardService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestParameterInterceptor,
            multi: true,
          },
        ],
      });
  debugger;
      service = TestBed.get(DashboardService);
      httpMock = TestBed.get(HttpTestingController);
      
    });
  

  it('should have withCredtianal paramter set ', () => {   

    debugger;
    service.getHeroes().subscribe(response => {
      expect(response).toBeTruthy();
      debugger;
      const httpRequest = httpMock.expectOne(`${service}/`);  
      expect(httpRequest.request.headers.has('withCredentials')).toEqual(true);
      });
    });

});