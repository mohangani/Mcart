import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { Login, IToken } from 'src/models/login';
import { urlConstants } from '../constants';
import { HttpHelperService } from './http-helper.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private httpHelper: HttpHelperService) {}

  authorised: boolean = false;
  public isAuthenticated = new Subject<boolean>();
  public isAuthenticated1 = new BehaviorSubject(false);
  public token: IToken = null;

  login(login: Login): Observable<boolean> {
    if (!login.userName || !login.password) return of(this.authorised);

    return this.httpHelper.Post<IToken>(urlConstants.LoginUrl, login).pipe(
      map((res) => {
        this.validate(res);
        return this.authorised;
      })
    );
  }

  public isAuthorisedUser() {
    if (this.token) return this.validate(this.token);

    var data = localStorage.getItem('logins');
    if (data) return this.validate(JSON.parse(data));

    this.authorised = false;
    return this.authorised;
  }

  private validate(tokenInfo: IToken): boolean {
    //tokenInfo ??= this.token;
    if (
      tokenInfo &&
      tokenInfo.token &&
      new Date(tokenInfo.expirationDate).getTime() - new Date().getTime() > 0
    ) {
      this.token = tokenInfo;
      this.authorised = true;
      localStorage.setItem('logins', JSON.stringify(tokenInfo));
    }
    this.isAuthenticated.next(this.authorised);
    return this.authorised;
  }

  public autoLogin() {
    var data = localStorage.getItem('logins');
    if (data) this.validate(JSON.parse(data));
  }

  public logOut() {
    this.authorised = false;
    localStorage.removeItem('logins');
    this.isAuthenticated.next(this.authorised);
  }
}
