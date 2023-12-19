import { Injectable } from '@angular/core';
import {Accommodation} from "./model/accommodation.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../env/env";
import {AccommodationTypeCheckBox} from "./model/accommodation-type.model";
import {Amenity} from "./model/amenity.model";
import {AccommodationType} from "./model/accommodationtype.model";
import {AmenityBackend} from "./model/amenity-backend.model";
import {AccommodationWithAmenities} from "./model/accommodation-with-amenities.model";
@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  private accommodationList: Accommodation[];
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<AccommodationWithAmenities[]>{
    return this.httpClient.get<AccommodationWithAmenities[]>(environment.apiHost + 'accommodations/amenities');
  }
  getAccommodation(id: number): Observable<Accommodation>{
    return this.httpClient.get<Accommodation>(environment.apiHost + 'accommodations/' + id);
  }
  searchAccommodations(guests?: number, location?: string, startDate?: string, endDate?: string): Observable<AccommodationWithAmenities[]> {
    let params = new HttpParams();

    if (guests) {
      params = params.set('guests', guests.toString());
    }
    if (location) {
      params = params.set('location', location);
    }
    if (startDate) {
      params = params.set('startDate', startDate); // Convert Date to YYYY-MM-DD format
    }
    if (endDate) {
      params = params.set('endDate', endDate); // Convert Date to YYYY-MM-DD format
    }
    return this.httpClient.get<AccommodationWithAmenities[]>(environment.apiHost + 'accommodations/search', { params });
  }

  filter(maximumPrice: number, minimumPrice: number, selectedAccommodationType: AccommodationTypeCheckBox[], amenities: Amenity[], accommodations: AccommodationWithAmenities[]): AccommodationWithAmenities[] {
    let filteredAccommodations: AccommodationWithAmenities[] = [];
    for (let i = 0; i < accommodations.length; i++){
      console.log("Petlja: "+i);

      console.log("Unet minprice: "+minimumPrice+"max: "+maximumPrice);
      console.log(amenities);
      console.log(accommodations);
      console.log(selectedAccommodationType);


      let validAccommodationType: boolean = false;
      for (let j = 0; j < selectedAccommodationType.length; j ++){
        if(!selectedAccommodationType[j].checked) continue;
        if(accommodations[i].type == selectedAccommodationType[j].value){
          validAccommodationType = true;
          break;
        }
      }

      if(!validAccommodationType) continue;

      console.log("Prodje validaciju tipa");

      let validAmenities = true;
      for( let j = 0; j < amenities.length; j ++){
        if(!amenities[j].checked) continue;

        let validEachAccommodationAmenity = false;

        for( let k = 0; k < accommodations[i].amenities.length; k ++){
          if(accommodations[i].amenities[k].id == amenities[j].id){
            validEachAccommodationAmenity = true;
            break;
          }
        }

        if(!validEachAccommodationAmenity){
          validAmenities = false;
          break;
        }

      }

      if(!validAmenities) continue;



      console.log("Da li je price izmedju rangea");
      console.log(accommodations[i].defaultPrice > minimumPrice && accommodations[i].defaultPrice < maximumPrice);
      if(accommodations[i].defaultPrice > minimumPrice && accommodations[i].defaultPrice < maximumPrice){
        filteredAccommodations.push(accommodations[i]);
      }

    }


    return  filteredAccommodations;
  }



  getAllAmenitiesCheckBoxes() {
    return this.httpClient.get<AmenityBackend[]>(environment.apiHost + 'amenities');
  }
}
