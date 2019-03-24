import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from './property.service';
import { ClientService } from './client.service';
import {environment} from '../../environments/environment'

@Injectable()
export class PipelineService {
  private _path = environment.origin + "api/v1/offer/1"

  constructor(private http: HttpClient,
              private propertyService: PropertyService,
              private clientService: ClientService) {

  }

  public getPipeline() { 
    //subscribe
    // return this.http.get(this._path)
    this.http.get(this._path).subscribe((data) => {
      return data
    })
    // return console.log('get pipeline')
  }

  public postOffer(property){
    this.http.post(this._path, property).subscribe((res) => {
      console.log(res)
    })
  }

}
