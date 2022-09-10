import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,CanDeactivate,Route,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from 'src/models/Deactivate';
import { LoginService } from './login.service';

@Injectable({providedIn:"root"})
export class AuthGaurdService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent> {

  constructor(private loginService:LoginService,private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

     if(!this.loginService.authorised){
      return this.router.parseUrl('/auth');
     };
     
     return true;

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.authorised;

  }

  canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return component.deactivate();

  }

}


// export class DeactivateService implements CanDeactivate<IDeactivateComponent>{

//   canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
//   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

//     return component.deactivate();

//   }



// }
