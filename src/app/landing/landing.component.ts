import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent  {
  results: any[];
  formData = {
    input: ''
  };

  constructor(private service: PostService) { }

  onSubmit() {
    this.service.getAll(this.formData.input).subscribe(res => this.results = res);
    console.log(this.results);
  }
}
