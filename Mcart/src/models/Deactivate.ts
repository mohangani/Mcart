import { UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

export interface IDeactivateComponent{
    deactivate() :  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  }