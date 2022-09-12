import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,CanDeactivate,Route,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from 'src/models/Deactivate';
import { LoginService } from './login.service';

@Injectable({providedIn:"root"})
export class AuthGaurdService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent> {

  constructor(private loginService:LoginService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

     return this.validate();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.validate();

  }

  canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return component.deactivate();

  }

  private validate(){
    if(!this.loginService.isAuthorisedUser()){
      return this.router.parseUrl('/auth');
     };
     
     return true;
  }

}


// export class DeactivateService implements CanDeactivate<IDeactivateComponent>{

//   canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
//   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

//     return component.deactivate();

//   }



// }
