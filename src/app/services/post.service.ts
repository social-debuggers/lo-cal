import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { NotFoundError } from '../common/not-found-error';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {
  constructor(http: Http) {
    super(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=`, http);
  }
}
