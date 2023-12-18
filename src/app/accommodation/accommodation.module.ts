import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from "@angular/router";
import { AccommodationCardsComponent } from './accommodation-cards/accommodation-cards.component';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { AccommodationCardComponent } from './accommodation-card/accommodation-card.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AccommodationCardsComponent,
    AccommodationDetailsComponent,
    AccommodationCardComponent
  ],
  exports: [
    AccommodationCardsComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class AccommodationModule { }
