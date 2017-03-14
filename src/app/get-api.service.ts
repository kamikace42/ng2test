import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetApiService {

  constructor(private http: Http) { }

  getPoke(searchTerm: string): Observable<any> {
    return this.http.get('http://pokeapi.co/api/v2/pokemon/' + searchTerm)
      .map(response => response.json());
  }
}
