import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule, Route} from "@angular/router";
import { AccommodationCardsComponent } from './accommodation-cards/accommodation-cards.component';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { AccommodationCardComponent } from './accommodation-card/accommodation-card.component';
import {AccommodationCreationComponent} from "./accommodation-creation/accommodation-creation.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OwnersAccommodationsCardsComponent} from "./owners-accommodations/owners-accommodations-cards.component";

import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import { DialogAccommodationFilterComponent } from './dialog-accommodation-filter/dialog-accommodation-filter.component';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MaterialModule} from "../material.module";
import {MatSliderModule} from "@angular/material/slider";
import {MatLegacySliderModule} from "@angular/material/legacy-slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AccommodationCardsComponent,
    AccommodationDetailsComponent,
    AccommodationCardComponent,
    AccommodationCreationComponent,
    OwnersAccommodationsCardsComponent

  ],
  exports: [
    AccommodationCardsComponent,
    AccommodationCreationComponent,
    OwnersAccommodationsCardsComponent
  ],
  imports: [
    MatNativeDateModule,
    CommonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MaterialModule,
    MatSliderModule,
    MatLegacySliderModule,
    SharedModule,
    MatDatepickerModule,
    ReactiveFormsModule

  ]
})
export class AccommodationModule { }
