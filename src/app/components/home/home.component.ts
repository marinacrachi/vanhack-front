import { Component, OnInit } from '@angular/core';
import { Client } from "../models/client";
import { Property } from '../models/property';
import { PropertyService } from '../services/property.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private storage: Storage
  private client: Client;
  public properties: Array<Property>;

  constructor(private propertyService: PropertyService) {
    this.storage = window.localStorage;
    this.client = new Client({});     // O cliente vai ser fixo? Vou buscar no banco?
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

      }
    ];
   }

  ngOnInit() {
    this.propertyService.getUser() 
    console.log(this.properties)
  }

}
