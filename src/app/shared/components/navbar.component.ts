import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) { }

    toggleBurger() {
        this.burgerSwitch = !this.burgerSwitch;
    }

    logOut() {
        localStorage.removeItem('jwtToken');
        this.router.navigate(['login']);
    }
}
