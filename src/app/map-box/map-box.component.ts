import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson, FeatureCollection } from './map';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss'],
})
export class MapBoxComponent implements OnInit {
  coordinates: any;

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 2.9019815254888974;
  lng = 101.65220256137424;
  // message = 'Aerodyne'
  source: any;
  message = 'Aerodyne';

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.currentCoordinate.subscribe(
      (coordinates) => (this.coordinates = coordinates)
    );

    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 16,
      center: [this.lng, this.lat],
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  ngDoCheck() {
    this.map.flyTo({
      center: this.coordinates,
    });
  }
}
