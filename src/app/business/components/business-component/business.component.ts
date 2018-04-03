import { BusinessService } from './../../service/business.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from '../../models/Business';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business: any;

  constructor(
     private businessService: BusinessService,
     private router: Router) { }

  ngOnInit() {
    this.businessService.getAllBusiness()
      .subscribe((data: Business[]) => this.business = data);
    // this.http.get('/business') // httpOptions
    // .subscribe(data => {
    //   this.business = data;
    //   console.log(this.business);
    // },
    //  err => {
    //   if (err.status === 401) {
    //     this.router.navigate(['login']);
    //   }
    // });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}
