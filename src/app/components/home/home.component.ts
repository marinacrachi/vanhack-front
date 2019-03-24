import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/client";
import { Property } from '../../models/property';
import { PropertyService } from '../../services/property.service'
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private storage: Storage
  private client: Client;
  public properties;

  fav = 'assets/images/pipeline/favorite.png'
  favoriteButton = ['assets/images/pipeline/noFavorite.png',
                    'assets/images/pipeline/noFavorite.png',
                    'assets/images/pipeline/noFavorite.png',
                    'assets/images/pipeline/noFavorite.png',
                    'assets/images/pipeline/noFavorite.png',
                    'assets/images/pipeline/noFavorite.png']

  constructor(private propertyService: PropertyService, private clientService: ClientService) {
    this.storage = window.localStorage;
    this.client = new Client({});
    this.properties = [
      {
        id: '1',
        title: 'House 1 bedroom',
        price: 100000,
        address: 'Montreal St.',
        propType: 'House',
        picture: 'http://lorempixel.com/400/400/city/'
      },
      {
        id: '2',
        title: 'Condo House 2 bedroom',
        price: 150000,
        address: 'Banff St.',
        propType: 'Condo House',
        picture: 'http://lorempixel.com/400/400/city/'

      },
      {
        id: '3',
        title: 'Apartment 4 bedroom',
        price: 550000,
        address: 'Mt. Tremblant St.',
        propType: 'Apartment',
        picture: 'http://lorempixel.com/400/400/city/'
      },
      {
        id: '4',
        title: 'House 2 bedroom',
        price: 200000,
        address: 'Burnaby St.',
        propType: 'House',
        picture: 'http://lorempixel.com/400/400/city/'
      },
      {
        id: '5',
        title: 'Condo House 2 bedroom',
        price: 150000,
        address: 'Banff St.',
        propType: 'Condo House',
        picture: 'http://lorempixel.com/400/400/city/'

      },
      {
        id: '6',
        title: 'Condo House 2 bedroom',
        price: 150000,
        address: 'Banff St.',
        propType: 'Condo House',
        picture: 'http://lorempixel.com/400/400/city/'

      }
    ];
  }

  ngOnInit() {
    this.getAllProperties()
    // this.clientService.getClient()
    this.propertyService.getProperties()

    console.log(this.properties)
  }

  getAllProperties() {
    //  this.properties = this.propertyService.getProperties()
  }

  addToFavorites(property,i) {

    this.favoriteButton[i] = this.fav

    if (this.storage.getItem("favorites")) {
      console.log('storage já tem registro')
      let tempFaves = JSON.parse(this.storage.getItem("favorites"))
      tempFaves.push(property)
      this.storage.setItem("favorites", JSON.stringify(tempFaves))
    } else {
      console.log('storage vazio')
      this.storage.setItem("favorites", "[]")
      let tempFaves = JSON.parse(this.storage.getItem("favorites"))
      tempFaves.push(property)
      this.storage.setItem("favorites", JSON.stringify(tempFaves))
    }
  }

}
