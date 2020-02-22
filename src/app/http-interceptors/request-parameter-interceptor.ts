import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestParameterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const useCrediantialReq = req.clone({
      headers: req.headers.set('withCredentials', 'true')
    });

    // send cloned request with header to the next handler.
    return next.handle(useCrediantialReq);
  }
}