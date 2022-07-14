import { Injectable } from "@angular/core";
import { Login } from "src/models/login";

@Injectable({ providedIn: "root" })
export class LoginService {

  constructor() { }

  authorised: boolean = true;


  login(login: Login): boolean {
    if (!login.userName || !login.password)
      return this.authorised;

    if (login.userName.toLocaleLowerCase() == "admin" && login.password === "admin") {
      this.authorised = true;
    }
    return this.authorised;
  }
}
