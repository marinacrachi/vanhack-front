import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from './property.service';
import { ClientService } from './client.service';

@Injectable()
export class PipelineService {
  private _path = "/"

  constructor(private http: HttpClient,
              private propertyService: PropertyService,
              private clientService: ClientService) {

  }

  public getPipeline() {
    //subscribe
    // return this.http.get(this._path)
    return console.log('get pipeline')
  }

}
