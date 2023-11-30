import { Component } from '@angular/core';
import {Accommodation} from "../model/accommodation.model";
import {ActivatedRoute} from "@angular/router";
import {AccommodationService} from "../accommodation.service";

@Component({
  selector: 'app-accommodation-details',
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.css']
})
export class AccommodationDetailsComponent {
  accommodation: Accommodation;
  constructor(private route: ActivatedRoute, private accommodationService: AccommodationService) {

  }
  ngOnInit():void{
    this.route.params.subscribe((params) =>{
      const id = +params['accommodationId']
      this.accommodationService.getAccommodation(id).subscribe({
        next: (data: Accommodation) => {
          console.log(data.price)
          this.accommodation = data}
      })
    })
  }
}
