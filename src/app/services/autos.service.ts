import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Auto } from '../models/Auto';

@Injectable()
export class AutosService {

  public url: string
  constructor(private _http:Http) {
    this.url = 'http://localhost:7070/api';
   }

   getAutos() {
     return this._http.get(this.url + '/autos').retry(3)
            .map(res => res.json());
   }

   postAuto(auto:Auto){
    let params = JSON.stringify(auto)
    let headers = new Headers()
    headers.append(
      'Content-type','application/json'
    );
    
    return this._http.post(
      this.url + '/auto',
      params,
      {headers:headers}
    ).map(res=>res.json().data)
  }

}
