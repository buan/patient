import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientServicesService } from './patient-services.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const oauth = this.injector.get(PatientServicesService);
    // console.log(`${oauth.getbasicauth()}`)
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/hal+json',
        Authorization: `Basic ${oauth.getbasicauth()}`,
        'X-CSRF-Token': `${oauth.getcsrf()}`
      }


    });
    return next.handle(req);

  }
}
