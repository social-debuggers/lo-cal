import { AuthService } from './../../auth/service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../auth/models/User';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [`
    .active {
      background: lightgray;
    }
  `]
})
export class NavbarComponent {

    burgerSwitch: boolean;

    constructor(private router: Router,
                private authService: AuthService,
                ) { }

    toggleBurger() {
        this.burgerSwitch = !this.burgerSwitch;
    }

    logOut() {
        localStorage.removeItem('jwtToken');
        this.router.navigate(['login']);
    }
}
