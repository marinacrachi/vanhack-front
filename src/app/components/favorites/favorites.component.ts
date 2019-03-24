import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Property } from '../../models/property';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  private storage: Storage;
  public properties: Array<Property>;
  scheduleButton = 'assets/images/pipeline/scheduleButton.png'

  constructor(private router: Router) {
    // fazer o request para o servidor
    this.storage = window.localStorage;
    this.properties = JSON.parse(this.storage.getItem("favorites"))
   }

  ngOnInit() {

  }

  beginPipeline(property){

    console.log(property)

    let pipeline = {
        idClient: '1',
        idProperty: '1',
        agentName: 'Mary Jane',
        status: '2'
      }

      alert("Check out your pipeline!")
    
    // dá post na property pra pipeline
  }

  removeAllFavorites() {
    this.storage.removeItem("favorites")
  }

}
