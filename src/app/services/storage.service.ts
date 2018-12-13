import { Injectable } from '@angular/core';

import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private locMexico: Location = {
    lat: 19.432608,
    lon: -99.133209,
    name: 'Ciudad de México',
    attraction: 'Castilo de Chapultepec',
    editable: false
  };
  private locMilan: Location = {
    lat: 45.464211,
    lon: 9.191383,
    name: 'Milán',
    attraction: 'Il duomo',
    editable: false
  };
  private locPittsburgh: Location = {
    lat: 40.440624,
    lon: -79.995888,
    name: 'Pittsburgh',
    attraction: 'Duquesne incline',
    editable: false
  };
  private locToronto: Location = {
    lat: 43.653908,
    lon: -79.384293,
    name: 'Toronto',
    attraction: 'CN Tower',
    editable: false
  };
  private locBarcelona: Location = {
    lat: 41.390699,
    lon: 2.1594955,
    name: 'Barcelona',
    attraction: 'Templo expiatorio de la Sagrada Familia',
    editable: false
  };
  private locMachuPicchu: Location = {
    lat: -13.163136,
    lon: -72.5471516,
    name: 'Machu Picchu',
    attraction: 'Vista de Wayna Picchu',
    editable: false
  };
  private locLondres: Location = {
    lat: 51.509865,
    lon: -0.118092,
    name: 'Londres',
    attraction: 'Elizabeth Tower (Big Ben)',
    editable: false
  };

  constructor() {}

  iniStgLocations(): void {
    const locations: Location[] = [];

    locations.push( this.locMexico );
    locations.push( this.locMilan );
    locations.push( this.locPittsburgh );
    locations.push( this.locToronto );
    locations.push( this.locBarcelona );
    locations.push( this.locMachuPicchu );
    locations.push( this.locMilan );
    locations.push( this.locLondres );

    this.setStgLocations( locations );
  }

  setStgLocations( favouritePlaces: Location[] ): void {
    localStorage.setItem( 'locations', JSON.stringify( favouritePlaces ) );
  }

  getStgLoactions(): Location[] {
    return JSON.parse( localStorage.getItem( 'locations' ) );
  }

  noStgLocations(): boolean {
    return ( localStorage.getItem( 'locations' ) === null );
  }
}
