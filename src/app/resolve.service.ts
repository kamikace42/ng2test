import {Response} from '@angular/http';
import { GetApiService } from './get-api.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ResolveService implements Resolve<any> {

  /*handleError(err: Observable<any>): any {
    console.log(err);
    this.router.navigate(['/error']);
  }*/

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

  constructor(private router: Router, private getApiService: GetApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const id = route.params['id'];
    return this.getApiService
      .getPoke(id)
      .map(data => {
        if (data) {
          return data;
        } else { // id not found
          this.router.navigate(['/error']);
          return;
        }
      })
      .catch(err => this.handleError(err));
  }
}
