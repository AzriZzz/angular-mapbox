import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { GeoJson } from '../map-box/map';
import * as mapboxgl from 'mapbox-gl';

const MAP_DATA = [
  {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [102.26141897895309, 2.2230225252761784],
    },
  },
];

@Injectable({
  providedIn: 'root',
})
export class MapService {
  lat = 2.9019815254888974;
  lng = 101.65220256137424;
  
  private coordinateSource = new BehaviorSubject([this.lng, this.lat]);
  currentCoordinate = this.coordinateSource.asObservable();

  data = MAP_DATA;
  constructor() {}

  getMarkers(): Observable<any[]> {
    return of(this.data);
  }

  changeCoordinate(coordinates: any) {
    this.coordinateSource.next(coordinates);
  }
}
