import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }


  validateForm({ restaurantName, latitude, longitude, type }) {
    let result = {
      message: '',
      button: '',
      isSuccess: false
    }
    if (
      restaurantName === "" ||
      latitude === "" ||
      longitude === "" 
      // || type === ""
    ) {
      result = {
        message: 'Fill the rest of the field!',
        button: 'Closed',
        isSuccess: false
      }
    } else {
      result = {
        message: 'Succesfully saved!',
        button: 'Done',
        isSuccess: true
      }
    }

    return result;
  }
}
