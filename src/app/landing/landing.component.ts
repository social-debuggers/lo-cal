import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  results: any[];
  formData = {
    input: ''
  };

  constructor(private service: PostService) { }

  ngOnInit() {
  }

  ngSubmit() {
    this.service.getAll(this.formData.input).subscribe(res => this.results = res);
    console.log(this.results);
  }
}
