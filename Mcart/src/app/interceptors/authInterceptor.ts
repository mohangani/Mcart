import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthGaurdService } from "../Services/auth-gaurd.service";
import { LoginService } from "../Services/login.service";


@Injectable()
export class authInterceptor implements HttpInterceptor {



    constructor(private loginservice: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // var newReq = req.clone({
        //     headers: req.headers.set("Authorization", (this.loginservice.token?.token) ? `Bearer ${this.loginservice.token.token}` : "")
        // });

        if ((this.loginservice.token?.token)) {
            const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${this.loginservice.token.token}` } });
            return next.handle(authReq);
        }
        return next.handle(req);

    }



}