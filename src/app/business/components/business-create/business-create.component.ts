import { BusinessService } from './../../service/business.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Business } from '../../models/Business';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css']
})
export class BusinessCreateComponent {
  business: any = {};

  constructor(private businessService: BusinessService, private router: Router) { }

  saveBusiness() {
   this.businessService.insertBusiness(this.business)
    .subscribe((res: Business) => {
       this.router.navigate(['/business']);
       },
       (err) => console.log(err));
  }
}
