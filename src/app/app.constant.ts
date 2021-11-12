import { IRestaurant } from "./models/models";

export const defaultForm = {
  restaurantName: '',
  latitude: '',
  longitude: '',
  type: '',
}

export const RESTAURANT_DATA: IRestaurant[] = [
  {
    index: 1,
    name: 'Langkawi Restaurant',
    latitude: 1.0079,
    longitude: 1.0079,
    type: 'Fast Food',
  },
  {
    index: 2,
    name: 'Kak Limah Sedap2',
    latitude: 4.0026,
    longitude: 4.0026,
    type: 'Casual Dining',
  },
  {
    index: 3,
    name: 'Masak Lemak Cili Api',
    latitude: 6.941,
    longitude: 6.941,
    type: 'Cafes',
  },
  {
    index: 4,
    name: 'Fried Archiles',
    latitude: 9.0122,
    longitude: 9.0122,
    type: 'Cafes',
  },
  {
    index: 5,
    name: 'Shawarma Restaurant',
    latitude: 10.811,
    longitude: 10.811,
    type: 'Casual Dining',
  },
];

export const TABLE_COLUMN = [
  'index',
  'name',
  'latitude',
  'longitude',
  'type',
  'action',
];

export const RESTAURANT_TYPE = ['Fast Food', 'Casual Dining','Cafes']
