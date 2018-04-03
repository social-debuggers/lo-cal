import { Component } from '@angular/core';

import { PostService } from './../services/post.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent  {
  results;
  formData = {
    input: ''
  };

  constructor(private service: PostService) { }

  onSubmit() {
    this.service.getAll(this.formData.input).subscribe(res => this.results = res);
    console.log(this.results);
  }
}
