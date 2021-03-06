import { IGeoJson, IGeometry } from "../models/models";

export class GeoJson implements IGeoJson {
  type='Feature';
  geometry: IGeometry;

  constructor(coordinates, public properties?) {
    this.geometry = {
      type: 'Point',
      coordinates: coordinates
    }
  }
}

export class FeatureCollection {
  type = 'FeatureCollection'
  
  constructor(public features: Array<GeoJson>){}
}