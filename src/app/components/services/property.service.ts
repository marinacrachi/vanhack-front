import { Injectable } from '@angular/core';
import { Property } from '../models/property';

@Injectable()
export class PropertyService {
  private storage: Storage
  private _path = "/users"

  constructor() {

    this.storage = window.localStorage;

  }

  public getUser() {
      //subscribe
    return console.log('users')
  }

}
