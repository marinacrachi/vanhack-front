import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';
import {environment} from '../../environments/environment'

@Injectable()
export class PropertyService {
  private _path = environment.origin + "api/v1/immobile"

  constructor(private http: HttpClient) {

  }

  public getProperties() {
    this.http.get(this._path).subscribe((data) => {
      console.log(data)
      // return data
    })
  }

}
