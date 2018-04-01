import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css']
})
export class BusinessCreateComponent implements OnInit {
  business = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBusiness() {
   this.business = this.http.post('/business', this.business)
      .subscribe(res => {
        const id = res['_id'];
        this.router.navigate(['/business-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

}
