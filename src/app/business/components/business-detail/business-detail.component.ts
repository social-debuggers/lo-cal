import { AuthService } from './../../../auth/service/auth.service';
import { BusinessService } from './../../service/business.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from '../../models/Business';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessDetailComponent implements OnInit {
  business: any = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private businessService: BusinessService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getBusinessDetail(this.route.snapshot.params['id']);
  }

  getBusinessDetail(id: string) {
    this.businessService.getBusiness(id)
      .subscribe((data: Business) => this.business = data);
  }

  deleteBusiness(id: string) {
    this.businessService.deleteBusiness(id)
    .subscribe((res: void) => {
      this.router.navigate(['/business']);
      },
      (err) => console.log(err));
  }
}
