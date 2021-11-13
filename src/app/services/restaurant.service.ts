import { RESTAURANT_TYPE, RESTAURANT_DATA } from './../app.constant';
import { Injectable } from '@angular/core';
import { IRestaurant } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  defaultData = RESTAURANT_DATA;
  constructor() {}

  getList() {
    return this.defaultData;
  }

  validateForm({ restaurantName, latitude, longitude }) {
    let result = {
      message: '',
      button: '',
      isSuccess: false,
    };
    if (restaurantName === '' || latitude === '' || longitude === '') {
      result = {
        message: 'Fill the rest of the field!',
        button: 'Closed',
        isSuccess: false,
      };
    } else {
      const type = RESTAURANT_TYPE[this.getRandomInt(0, 2)];
      const index = this.defaultData[this.defaultData.length - 1].index + 1;
      const restaurant: IRestaurant = {
        index,
        name: restaurantName,
        latitude: Number(parseFloat(latitude).toFixed(6)),
        longitude: Number(parseFloat(longitude).toFixed(6)),
        type,
      };

      this.defaultData.push(restaurant);

      result = {
        message: 'Succesfully saved!',
        button: 'Done',
        isSuccess: true,
      };
    }

    return result;
  }

  updateList(datas) {
    datas.forEach((element, index) => {
      element.index = index + 1;
    });
    this.defaultData = datas;

    return this.defaultData;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
