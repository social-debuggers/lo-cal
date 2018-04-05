import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router, RouterLink } from '@angular/router';

@Injectable()
export class AuthService {
    isLoggedin = false;
    message = '';
    data: any;

    constructor(private http: HttpClient,
                    private router: Router) {}

    login(user: User) {
        this.http.post('/login', user).subscribe(resp => {
            this.data = resp;
            localStorage.setItem('jwtToken', this.data.token);
            this.router.navigate(['business']);
        }, err => {
            this.message = err.error.msg;
        });
    }

    isLoggedIn(): Boolean {
        if (localStorage.getItem('jwtToken') == null) {
            this.isLoggedin = false;
            return this.isLoggedin;
        } else {
            return true;
        }
    }
}
