import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-favourite-place-dialog',
  templateUrl: './favourite-place-dialog.component.html',
  styleUrls: ['./favourite-place-dialog.component.css']
})
export class FavouritePlaceDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FavouritePlaceDialogComponent>,
    public fb: FormBuilder,
    @Inject( MAT_DIALOG_DATA ) public place: Location
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      'name': [ this.place.name, Validators.required ],
      'attraction': [ this.place.attraction, Validators.required ]
    });
  }

}
