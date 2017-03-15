import { Http, URLSearchParams, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetApiService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    const body = res.json();
    console.log(res);
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getPoke(searchTerm: string): Observable<Object> {
    return this.http.get('http://pokeapi.co/api/v2/pokemon/' + searchTerm)
      // .map(response => response.json());
      .map(this.extractData)
      .catch(this.handleError);
  }
}
