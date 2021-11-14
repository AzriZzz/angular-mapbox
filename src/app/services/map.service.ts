import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GeoJson } from '../map-box/map';
import * as mapboxgl from 'mapbox-gl'

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
  data = MAP_DATA;
  constructor() {
  }

  getMarkers(): Observable<any[]> {
    console.log(this.data);
    return of(this.data);
  }

  createMarker(info): Observable<any[]> {
    this.data.push(info);
    console.log(this.data);
    return of(this.data);
  }
}
