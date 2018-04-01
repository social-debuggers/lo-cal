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

  getBusiness(id) {
    this.http.get('/business/' + id).subscribe(data => {
      this.business = data;
    });
  }

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
