import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { productService } from './products.services';

@Injectable({providedIn:"root"})
export class AppResolverService implements Resolve<any> {

  constructor(private productservice:productService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("state:" + state);
    console.log("route:" + route);

    //let id = +state.root.params["id"]
    let id:number = +route.params["id"]

    return this.productservice.getProductById(id);//.subscribe({error:(err)=>{console.log(`err - ${err}`); throw err;}})

  }
}
