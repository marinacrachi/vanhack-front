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
  public pipelinePhase;
  public pipelineImage;
  public sidebarImage;
  public timelineImage;

  constructor(
    private propertyService: PropertyService,
    private clientService: ClientService,
    private pipelineService: PipelineService,
    private router:Router,  
    private route: ActivatedRoute
  ) {


    this.pipelinePhase = 0;
    this.pipelineImage = 'assets/images/pipeline/' + this.pipelinePhase + '.png'
    this.sidebarImage = 'assets/images/pipeline/information.png'
    this.timelineImage = 'assets/images/pipeline/activities.png'

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
    this.getPipelineInfo()
    this.getPipelineImage()
  }

  getPipelineInfo() {
    this.pipelineService.getPipeline()
    this.pipeline = {
      idClient: '1',
      idProperty: '1',
      agentName: 'Mary Jane',
      status: '1'
    }

    this.getPipelineImage()
  }

  getPipelineImage() {
    switch (this.pipeline.status) {
      case 'SCHEDULE_VISIT':
        this.pipelineImage = 'assets/images/pipeline/1.png'
        break;
      case 'WAITING_MORTGAGE_LOAN_APPROVAL':
        this.pipelineImage = 'assets/images/pipeline/2.png'
        break;
      case 'APPROVED3':
        this.pipelineImage = 'assets/images/pipeline/3.png'
        break;
      default:
        this.pipelineImage = 'assets/images/pipeline/1.png'
    }
  }

  postQuestion(){
    alert("Question sent!")
  }
  

}
