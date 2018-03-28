import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  loginData = { username: '', password: '' }; // holds the login data
  message = '';
  data: any;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login() {
    this.http.post('/login', this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate(['local']);
    }, err => {
      this.message = err.error.msg;
    });
  }
}
