import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {

  constructor(private notificationService: NzNotificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((failedReq: HttpErrorResponse) => {
        let errorMessage = failedReq.error.error.message;
        this.notificationService.error(
          failedReq.error.error.name,
          failedReq.error.error.message,
        )
        return throwError(errorMessage);
      })
    );;
  }
}
