import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};

  constructor(private auth: AuthService, private navigator: Router) { }

  ngOnInit() {
  }
  // tslint:disable-next-line: align
  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        alert(res.message);
        localStorage.setItem('token', res.token);
        this.navigator.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
        alert('Email o Password incorrectos!');
      }
    );
  }

}
