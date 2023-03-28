import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Login/admin/admin.component';
import { AuthGaurdService } from '../Services/auth-gaurd.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public isSubmited: boolean = false;

  constructor(private login: LoginService, private route: Router) {}

  ngOnInit(): void {}

  onSignin() {
    this.isSubmited = true;
    this.route.navigate(['/admin']);

    this.login
      .login({ userName: this.username, password: this.password })
      .subscribe((x) => {
        if (x) {
          this.route.navigate(['/admin']);
        }
      });
  }
}
