import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Property } from '../../models/property';
import { PipelineService } from 'src/app/services/pipeline.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  private storage: Storage;
  public properties: Array<Property>;
  scheduleButton = 'assets/images/pipeline/scheduleButton.png'

  constructor(private router: Router, private pipelineService: PipelineService) {
    // fazer o request para o servidor
    this.storage = window.localStorage;
    this.properties = JSON.parse(this.storage.getItem("favorites"))
   }

  ngOnInit() {

  }

  beginPipeline(property){

    console.log(property)

      this.pipelineService.postOffer(property)
    
  }

  removeAllFavorites() {
    this.storage.removeItem("favorites")
  }

}
