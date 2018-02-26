import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface Search {};

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  public api = 'http://localhost:3000/';
  public token = `Bearer ${localStorage.getItem('token')}`;

  /**
   * 
   * Options Headers
   */
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.token
    })
  };

  /**
   * 
   * @param http 
   */
  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  /** 
   * 
  */
  getAccess(): Observable<Search[]>{
      return this.http.get<Search[]>(`${this.api}authorize`);
  }

  /**
   * 
   * @param search 
   */
  getSearch(search): Observable<Search[]>{
      return this.http.post<Search[]>(`${this.api}search`, search , this.httpOptions);
  }
}
