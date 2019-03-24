import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';

@Injectable()
export class PropertyService {
  private _path = "/"

  constructor(private http: HttpClient) {

  }

  public getProperties() {
    //subscribe
    // return this.http.get(this._path)
    return console.log('users')
  }

}
