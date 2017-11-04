import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import "rxjs/add/observable/fromPromise";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
// import {Observable} from "rxjs/Observable";
import {User} from "./user.model";

const API_URL = "http://memoriz-api.herokuapp.com/";

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
    if (this.user != null)
      headers.append('token', this.user.token.toString());
    return headers;
  }

  signin(data) {
    const options = new RequestOptions({headers: this.getHeaders()});
    return this.http.post(API_URL + 'users/sign_in', JSON.stringify(data), options)
      .map(res => res.json());
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
    const options = new RequestOptions({headers: this.getHeaders()});
    return this.http.post(API_URL + 'users', JSON.stringify(data), options)
      .map(res => res.json());
  }

  getPictures() {
    const options = new RequestOptions({headers: this.getHeaders()});
    return this.http.get(API_URL + 'contents', options)
      .map(res => res.json());
  }

}

