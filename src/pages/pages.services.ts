import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PagesService {
  const
  API_URl = "http://memoriz-api.herokuapp.com"
  const
  headers = new Headers(
    {
      'Content-Type': 'application/json'
    });
  let
  options = new RequestOptions({headers: headers});

  signUp(data) {

  }
}
