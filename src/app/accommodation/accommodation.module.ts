import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from "@angular/router";
import { AccommodationCardsComponent } from './accommodation-cards/accommodation-cards.component';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { AccommodationCardComponent } from './accommodation-card/accommodation-card.component';

import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import { DialogAccommodationFilterComponent } from './dialog-accommodation-filter/dialog-accommodation-filter.component';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MaterialModule} from "../material.module";
import {MatSliderModule} from "@angular/material/slider";
import {MatLegacySliderModule} from "@angular/material/legacy-slider";


@NgModule({
  declarations: [
    AccommodationCardsComponent,
    AccommodationDetailsComponent,
    AccommodationCardComponent,
  ],
  exports: [
    AccommodationCardsComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MaterialModule,
    MatSliderModule,
    MatLegacySliderModule,
    SharedModule
  ]
})
export class AccommodationModule { }
