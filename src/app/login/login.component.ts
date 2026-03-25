import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hidePassword: boolean = true;
  constructor(
    private loginser: LoginService,
    private routerlogin: Router,
  ) {}

  loginform: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  login() {
    console.log(this.loginform.value);

    this.loginser.getlogin(this.loginform.value).subscribe(
      (reslogin: any) => {
        this.loginform = reslogin;
        alert('login successfull');
        this.routerlogin.navigateByUrl('/dashbord');
        sessionStorage.setItem('logintoken', reslogin.accessToken);
      },
      (err: any) => {
        alert('invalid user');
      },
    );
  }
  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
}
