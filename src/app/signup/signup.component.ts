import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = { username: '', password: '' };
  message = '';

  constructor(
    private http: HttpClient,
    private router: Router) { }

  signup() {
    this.http.post('/signup', this.signupData)
    .subscribe(resp => {  // resp=response
      console.log(resp);
      this.router.navigate(['login']);
    }, err => { // else return the error message to the var above for error handeling
      this.message = err.error.msg;
    });
  }
}
