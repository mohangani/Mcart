import { Component, OnDestroy } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnDestroy {
  title: string = 'Mcart';
  fileName: string = this.getFileName();
  selectedNavId: Number;
  public isAuthenticated: boolean = false;
  public subscriptions: Subscription[] = [];

  constructor(private loginService: LoginService) {

    this.subscriptions.push(this.loginService.isAuthenticated.subscribe(x => {

      console.log(x);
      this.isAuthenticated = x;

    }));

    loginService.autoLogin();

  }
  ngOnDestroy(): void {
    this.subscriptions?.forEach(x => x.unsubscribe());
  }

  public onSignOutClick() {
    this.loginService.logOut();
  };

  public getFileName() {
    return this.constructor.name;

  }
  onNavClick(selectedNav: Number) {
    this.selectedNavId = selectedNav;
  }

}
