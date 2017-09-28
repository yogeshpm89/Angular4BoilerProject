import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { HttpResponse } from '@angular/common/http';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {BlockUIModule} from 'primeng/primeng';

export class AppHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next.handle(req).do(
                event => {

                    if (event instanceof HttpRequest) {

                    }

                    if (event instanceof HttpResponse) {
                        const elapsed = Date.now() - started;
                        console.log('Request for ${req.urlWithParams} took ${elapsed} ms.');
                    }
                }
            );

    }
}
