import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { FavouritePlaceDialogComponent } from './components/favourite-place-dialog/favourite-place-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    FavouritePlaceDialogComponent
  ],
  entryComponents: [
    FavouritePlaceDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
