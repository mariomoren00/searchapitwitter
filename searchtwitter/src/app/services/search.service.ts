import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface Search {};

@Injectable()
export class SearchService
{
    public api = 'http://localhost:3000/';
    public token = `Bearer ${localStorage.getItem('token')}`;

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.token
      })
    };

    constructor( private http: HttpClient ) {
        console.log('SERVICES');
    }

    getAccess(): Observable<Search[]>{
        return this.http.get<Search[]>(`${this.api}authorize`);
    }

    getSearch(search): Observable<Search[]>{
        return this.http.post<Search[]>(`${this.api}search`, search , this.httpOptions);
    }
    
}
