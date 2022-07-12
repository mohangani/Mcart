import { Component } from "@angular/core";

@Component({
selector:"app-login-user",
templateUrl:"./user.component.html",
})
export class User{

public fileName:string = this.constructor.name;

    constructor() {
            
    }

}