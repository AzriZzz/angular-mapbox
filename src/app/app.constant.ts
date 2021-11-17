import { IRestaurant } from './models/models';

export const defaultForm = {
  restaurantName: '',
  latitude: '',
  longitude: '',
  type: '',
};

export const RESTAURANT_DATA: IRestaurant[] = [
  {
    index: 1,
    name: 'Jom Ikan Bakar langkawi',
    latitude: 6.3489485301484425,
    longitude: 99.7315179873812,
    type: 'Fast Food',
  },
  {
    index: 2,
    name: 'Restoran Siti Fatimah',
    latitude: 6.327272078510774,
    longitude: 99.7826809088428,
    type: 'Casual Dining',
  },
  {
    index: 3,
    name: 'Kedai Makan Che ta ayer tawar perak',
    latitude: 4.346379036752815,
    longitude: 100.78980212430058,
    type: 'Cafes',
  },
  {
    index: 4,
    name: 'Kedai Makan Kak Gee',
    latitude: 4.197685407953846,
    longitude: 101.26361542539308,
    type: 'Cafes',
  },
  {
    index: 5,
    name: 'Nasi Kak Wok Cyberjaya - KB Corner',
    latitude: 2.9260042191330005, 
    longitude: 101.65676709141529,
    type: 'Casual Dining',
  },
];

export const TABLE_COLUMN = [
  // 'index',
  'name',
  'latitude',
  'longitude',
  'type',
  'action',
];

export const RESTAURANT_TYPE = ['Fast Food', 'Casual Dining', 'Cafes'];
