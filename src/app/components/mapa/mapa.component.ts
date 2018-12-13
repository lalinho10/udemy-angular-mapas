import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { Location } from '../../interfaces/location';

import { StorageService } from '../../services/storage.service';

import { FavouritePlaceDialogComponent } from '../favourite-place-dialog/favourite-place-dialog.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {
  favouritePlaces: Location[] = [];

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    if ( this.storageService.noStgLocations() ) {
      this.iniStorage();
    } else {
      this.favouritePlaces = this.storageService.getStgLoactions();
    }
  }

  showSnackMessage( message: string ): void {
    this.snackBar.open( message, '', { duration: 2000 } );
  }

  addLocation( event ): void {
    const newPlace: Location = {
      lat: event.coords.lat,
      lon: event.coords.lng,
      name: 'Destination',
      attraction: 'Attraction',
      editable: true
    };

    this.favouritePlaces.push( newPlace );
    this.storageService.setStgLocations( this.favouritePlaces );
    this.showSnackMessage( '¡Nuevo lugar favorito!' );
  }

  updateLocation( place: Location, updateData: any ): void {
    place.name = updateData.name;
    place.attraction = updateData.attraction;

    this.storageService.setStgLocations( this.favouritePlaces );
    this.showSnackMessage( '¡Lugar favorito actualizado!' );
  }

  deleteLocation( i: number ) {
    this.favouritePlaces.splice( i, 1 );
    this.storageService.setStgLocations( this.favouritePlaces );
    this.showSnackMessage( 'Lugar borrado' );
  }

  iniStorage(): void {
    this.storageService.iniStgLocations();
    this.favouritePlaces = this.storageService.getStgLoactions();
  }

  showFavouritePlaceDialog( place: Location ): void {
    const dialogRef = this.dialog.open( FavouritePlaceDialogComponent, {
      data: place,
      width: '240px'
    });

    dialogRef.afterClosed().subscribe( result => {
      if ( result ) {
        this.updateLocation( place, result );
      }
    });
  }
}
