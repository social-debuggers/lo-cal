import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessDetailComponent implements OnInit {
  business = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBusinessDetail(this.route.snapshot.params['id']);
  }

  getBusinessDetail(id) {
    this.http.get('/business/' + id).subscribe(data => {
      this.business = data;
    });
  }

  deleteBusiness(id) {
    this.http.delete('/business/' + id)
      .subscribe(res => {
        this.router.navigate(['/business']);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
