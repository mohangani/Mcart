import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogHttpRequestsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(`Http Call Starts. \n ${request.url} \n Type:${request.method}`);
    return next.handle(request).pipe(this.responseLog);
  }

  private responseLog(res) : Observable<HttpEvent<any>>{
    console.log(`Http Call ENDS. \n body:${JSON.stringify(res)}`);
    return res;
  }
}
