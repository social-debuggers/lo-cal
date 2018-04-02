import { BusinessService } from './../../service/business.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Business } from '../../models/Business';

@Component({
  selector: 'app-business-edit',
  templateUrl: './business-edit.component.html',
  styleUrls: ['./business-edit.component.css']
})
export class BusinessEditComponent implements OnInit {
  business: any = {};

  constructor(private businessService: BusinessService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBusinessDetails(this.route.snapshot.params['id']);
  }

  // sets up the get request by allowing us to pass the id in as a value.
  // also allows us to pass the id already stored in the params value from the snapshot.
  getBusinessDetails(id: string) {
    this.businessService.getBusiness(id)
    .subscribe((data: Business) =>
    this.business = data);
  }

 updateBusiness(id: string) {
    this.businessService.updateBusiness(id, this.business)
      .subscribe((res: void) =>
      this.router.navigate([`/business`]),
      (err) => console.log(err));
  }
}
