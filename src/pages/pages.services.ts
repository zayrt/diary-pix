import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";

@Injectable()
export class PagesService {
  constructor(private http: Http) {
  }

  const API_URL = "http://memoriz-api.herokuapp.com/";
  const headers = new Headers({'Content-Type': 'application/json'});
  const options = new RequestOptions({headers: this.headers});

  signup(data): Observable<any> {
    let signupObservable = Observable.fromPromise(new Promise((resolve, reject) => {
      this.http.post(this.API_URL + 'users', data, this.options)
        .toPromise()
        .then((response) =>
        {
          console.log('API Response : ', response.json());
          resolve(response.json());
        })
        .catch((error) =>
        {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
    }));
  }
}

