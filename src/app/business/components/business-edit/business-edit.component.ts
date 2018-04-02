import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business-edit',
  templateUrl: './business-edit.component.html',
  styleUrls: ['./business-edit.component.css']
})
export class BusinessEditComponent implements OnInit {
  business = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBusiness(this.route.snapshot.params['id']);
  }

  // sets up the get request by allowing us to pass the id in as a value.
  // also allows us to pass the id already stored in the params value from the snapshot.
  getBusiness(id) {
    this.http.get('/business/' + id).subscribe(data => {
      this.business = data;
    });
  }
// TODO: FIX update business route
  updateBusiness(id, data) {
    this.http.put('/business/' + id, data)
      .subscribe(res => {
        // tslint:disable-next-line:no-shadowed-variable
        const id = res['_id'];
        this.router.navigate(['/business-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
