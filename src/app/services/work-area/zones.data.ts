export interface IZone {
  latitude: number;
  longitude: number;
  name: string;
  radius: number;
}

export const zones: IZone[] = [
  {
    latitude: 32.075562,
    longitude: 34.794928,
    name: 'Webiks',
    radius: 1
  },
  {
    latitude: 33.074973,
    longitude: 34.785809,
    name: 'Bauer',
    radius: 1
  },
  {
    latitude: 32.078759,
    longitude: 32.794546,
    name: 'Hod',
    radius: 1
  }
];
