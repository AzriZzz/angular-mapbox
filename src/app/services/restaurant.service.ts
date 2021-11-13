import { RESTAURANT_TYPE, RESTAURANT_DATA } from './../app.constant';
import { Injectable } from '@angular/core';
import { IRestaurant } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor() {}

  getList() {
    console.log(JSON.stringify(RESTAURANT_DATA));
    return RESTAURANT_DATA;
  }

  validateForm({ restaurantName, latitude, longitude, type }) {
    let result = {
      message: '',
      button: '',
      isSuccess: false,
    };
    if (
      restaurantName === '' ||
      latitude === '' ||
      longitude === ''
    ) {
      result = {
        message: 'Fill the rest of the field!',
        button: 'Closed',
        isSuccess: false,
      };
    } else {
      const randNum = this.getRandomInt(0, 1);
      const type = RESTAURANT_TYPE[randNum];
      const index = RESTAURANT_DATA[RESTAURANT_DATA.length - 1].index + 1;
      const restaurant: IRestaurant = {
        index,
        name: restaurantName,
        latitude: Number(parseFloat(latitude).toFixed(6)),
        longitude: Number(parseFloat(longitude).toFixed(6)),
        type,
      };

      RESTAURANT_DATA.push(restaurant);

      result = {
        message: 'Succesfully saved!',
        button: 'Done',
        isSuccess: true,
      };
    }

    return result;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
