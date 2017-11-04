import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import "rxjs/add/observable/fromPromise";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {Observable} from "rxjs/Observable";
import {User} from "./user.model";

const API_URL = "http://memoriz-api.herokuapp.com/";
const headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
const options = new RequestOptions({headers: headers});

@Injectable()
export class PagesService {
  fileTransfer: FileTransferObject = this.transfer.create();
  user: User = null;

  constructor(private http: Http, private transfer: FileTransfer) {
  }

  private getHeaders() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    // if (this.user != null)
      // headers.append('token', this.user.authentication_token.toString());
    return headers;
  }

  signin(data) {
    return this.http.post(API_URL + 'users/sign_in', JSON.stringify(data), options)
      .map(res => {
        res = res.json();
        console.log(res)
        // this.user = new User(res.user);
      });
  }

  signup(data) {
    /* let fileOptions: FileUploadOptions = {
      fileKey: 'attachment',
      fileName: fileName,
      chunkedMode: false,
      headers: {},
      params: data
    }
    return Observable.fromPromise(this.fileTransfer.upload(filePath, API_URL + '/users' , fileOptions)); */
    return this.http.post(API_URL + 'users', JSON.stringify(data), options)
      .map(res => {
        res = res.json();
        // this.user = new User(res.user);
      });
  }

}

