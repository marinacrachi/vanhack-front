import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  private storage: Storage
  public properties: Array<Property>;

  constructor() {
    this.storage = window.localStorage;
    this.properties = JSON.parse(this.storage.getItem("favorites"))
   }

  ngOnInit() {
    console.log(this.properties)
  }

}
