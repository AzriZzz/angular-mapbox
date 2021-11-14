export interface IRestaurant {
  index: number;
  name: string;
  latitude: number;
  longitude: number;
  type: string;
}


export interface IGeometry {
  type: string;
  coordinates: number[]
}

export interface IGeoJson {
  type: string;
  geometry: IGeometry;
  properties?: any;
  $key?: string;
}