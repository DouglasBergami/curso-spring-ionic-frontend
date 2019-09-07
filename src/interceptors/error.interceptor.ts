import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

export class ErrorInteceptor implements HttpInterceptor{

    @Injectable()
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log ("passou no interceptor");
    return next.handle(req)
    .catch((error, caught) => {

        let errorObj = error;
        if (errorObj.error){
            errorObj = errorObj.error;
        }
        if (!errorObj.status){
            errorObj = JSON.parse(errorObj);
        }

        console.log("Erro detectado pelo Interceptor")
        console.log(errorObj);

        return Observable.throw(errorObj);
    }) as any;

}
}

export const ErrorInteceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInteceptor,
    multi: true,
};