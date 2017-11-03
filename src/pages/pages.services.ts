import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

const API_URL = "http://memoriz-api.herokuapp.com/";
const headers = new Headers({'Content-Type': 'application/json'});
const options = new RequestOptions({headers: headers});

@Injectable()
export class PagesService {
  constructor(private http: Http) {
  }

  signup(data) {
    return this.http.post(API_URL + 'users', data, options)
      .map(res => res.json());
  }

}

