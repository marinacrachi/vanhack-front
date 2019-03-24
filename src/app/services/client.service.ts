import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable()
export class ClientService {
  private _path = "/"

  constructor(private http: HttpClient) {

  }

  public getClient() {
    //subscribe
    // return this.http.get(this._path)
    return console.log('client')
  }

}
