import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';
import {environment} from '../../environments/environment'

@Injectable()
export class ClientService {
  private _path = environment.origin + "api/v1/client/"

  constructor(private http: HttpClient) {

  }

  public getClient() {
    //subscribe
    // return this.http.get(this._path)
    this.http.get(this._path + '100000').subscribe((data) => {
      console.log(data)
      return data
    })
    // return console.log('client')
  }

}
