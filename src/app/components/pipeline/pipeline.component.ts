import { Component, OnInit } from '@angular/core';
import { Pipeline } from '../../models/pipeline';
import { Client } from 'src/app/models/client';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property.service';
import { ClientService } from 'src/app/services/client.service';
import { PipelineService } from 'src/app/services/pipeline.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {

  private storage: Storage;
  public client: Client;
  public property: Property;
  public pipeline: Pipeline;
  public pipelineImage;

  constructor(
    private propertyService: PropertyService,
    private clientService: ClientService,
    private pipelineService: PipelineService,
    private router:Router, 
    private route: ActivatedRoute
  ) {

    this.pipelineImage = 'assets/images/1.png'

    this.client = {
      id: '1',
      email: 'johndoe@domain.com',
      name: 'John Doe',
      birthday: '01/01/1980',
      wage: 120000
    }

    this.property = {
      id: '1',
      title: 'House 1 bedroom', 
      price: 100000,
      address: 'Montreal St.',
      propType: 'House',
      picture: 'http://lorempixel.com/400/400/city/'

    }
  }

  ngOnInit() {

    // da get na pipeline
    this.getPipelineInfo()
    // return pipeline
  }

  getClientByInfo() {
    // this.clientService.getClientById()
    // fazer um subscribe e popular o cliente
  }

  getPropertyInfo() {
    // this.propertyService.getPropertyById()
    // fazer um subscribe e popular o imóvel
  }

  getPipelineInfo() {
    this.pipelineService.getPipeline()
    // fazer um subscribe e com o them popular as informações do usuário e a pipeline image
    this.pipeline = {
      idClient: '1',
      idProperty: '1',
      agentName: 'Mary Jane',
      status: '2'
    }

    this.getPipelineImage()
  }

  getPipelineImage() {
    switch (this.pipeline.status) {
      case '1':
        this.pipelineImage = 'assets/images/1.png'
        break;
      case '2':
        this.pipelineImage = 'assets/images/2.png'
        break;
      case '3':
        this.pipelineImage = 'assets/images/3.png'
        break;
      case '4':
        this.pipelineImage = 'assets/images/4.png'
        break;
      default:
        this.pipelineImage = 'assets/images/1.png'
    }
  }

  postQuestion(){
    alert("Question sent!")
  }

}
