import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NotFoundError } from '../common/not-found-error';


@Injectable()
export class DataService {

    newURL: string;
    key = 'AIzaSyAb-tt9qfdLheaw7_dXt_Fd9OnBjVj5EAI';

    constructor(private url: string, private http: Http) { }

    getAll(value: string) {
         this.newURL = this.url + value + '&key=' + this.key;
         console.log(this.newURL);
        return this.http.get(this.newURL)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(resource) {
        return Observable.throw(new AppError());
        // return this.http.post(this.url, JSON.stringify(resource))
        //     .map(response => response.json())
        //     .catch(this.handleError);
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        } else {
            return Observable.throw(new AppError(error));
        }
    }
}
