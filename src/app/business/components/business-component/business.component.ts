import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business: any;

  constructor(
     private http: HttpClient,
     private router: Router) { }

  ngOnInit() {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    // };
    this.http.get('/business') // httpOptions
    .subscribe(data => {
      this.business = data;
      console.log(this.business);
    },
     err => {
      if (err.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}
