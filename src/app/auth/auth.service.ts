import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../auth/models/User';
import { Router, RouterLink } from '@angular/router';

@Injectable()

export class AuthService {
    isLoggedin = false;
    redirectUrl: string;
    loginData = { username: '', password: '' }; // holds the login data
    message = '';
    data: any;

    constructor(private http: HttpClient, private router: Router) {
    }

    login() {
        this.http.post('/login', this.loginData).subscribe(resp => {
            this.data = resp;
            localStorage.setItem('jwtToken', this.data.token);
            this.router.navigate(['business']);
        }, err => {
            this.message = err.error.msg;
        });
    }

    isLoggedIn() {
        if (localStorage.getItem('jwtToken') == null) {
            this.isLoggedin = false;
            return this.isLoggedin;
        } else {
            return true;
        }
    }
}
