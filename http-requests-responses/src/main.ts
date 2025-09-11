import { bootstrapApplication } from '@angular/platform-browser';

import { HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';
import { AppComponent } from './app/app.component';

function loggingInterceptors (request: HttpRequest<unknown>, next: HttpHandlerFn) {
  // const req = request.clone({
  //   headers: request.headers.set('X-DEBUG', 'TESTING')
  // })
  console.log('[Outgoing request]');
  console.log(request)
  return next(request).pipe(
    tap({
      next: event => {
        if(event.type === HttpEventType.Response) {
          console.log('[Incoming response]')
          console.log(event.status)
          console.log(event.body)
        }
      }
    })
  );
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptors]))],
}).catch((err) => console.error(err));
