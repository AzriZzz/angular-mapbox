import { environment } from '../../environments/environment'
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson, FeatureCollection } from "./map";
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})

export class MapBoxComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 2.9019815254888974;
  lng = 101.65220256137424;
  message = 'Aerodyne'
  source: any;
  markers: any;
  numerical = 0;
  constructor(private mapService: MapService) { }

  ngOnInit() {
    // this.markers = this.mapService.getMarkers();
    console.log(this.markers);

    mapboxgl.accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('click', (event => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat]
      const newMarket = new GeoJson(coordinates, { kedai: this.message});
      console.log(newMarket);
      this.markers = this.mapService.createMarker(newMarket)

      this.map.addSource('geoMap', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      })

      this.source = this.map.getSource('geoMap')

      this.markers.subscribe(markers => {
        let data = new FeatureCollection(markers)
        this.source.setData(data);
        console.log(this.source)
      })

      this.numerical+= 1

      this.map.addLayer({
        id: '{this.numerical}',
        source: 'geoMap',
        type: 'symbol',
        layout: {
          'text-field': '{kedai}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'rocket-15',
          'text-offset': [0,1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2,
        }
      })
    }))
  }

  flyTo() {
    console.log('geojson');
    // this.map.flyTo({
    //   center: data.geometry.coordinates
    // })
  }
}