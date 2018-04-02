import { Observable } from 'rxjs/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Business } from '../models/Business';

@Injectable()
export class BusinessService {

     httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };

    constructor(private http: HttpClient) { }

    // GET ALL BUSINESSES
    getAllBusiness(): Observable<Business[]> {
        return this.http.get<Business[]>('/business'); // httpOptions for auth
    }

    // GET a Business
    getBusiness(id: string): Observable<Business> {
        return this.http.get<Business>(`business/${id}`);
    }

    // SAVE A Business
    insertBusiness(business: Business): Observable<Business> {
        return this.http.post<Business>('/business', business);
    }

    // UPDATE a Business
    updateBusiness(id: string, business: Business): Observable<void> {
        return this.http.put<void>(`/business/${id}`, business);
    }

    // DELETE a Business
    deleteBusiness(id: string): Observable<void> {
        return this.http.delete<void>(`/business/${id}`);
    }
}
