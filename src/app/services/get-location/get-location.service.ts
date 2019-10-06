import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorkAreaService } from '../work-area/work-area.service';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  coordinates: BehaviorSubject<Coordinates> = new BehaviorSubject({latitude: 0, longitude: 0} as Coordinates);
  error: BehaviorSubject<string> = new BehaviorSubject('');
  private lastPosition: Coordinates = {longitude: 0, latitude: 0} as Coordinates;

  constructor(private wa: WorkAreaService) {
    navigator.geolocation.watchPosition(this.setLocation.bind(this), this.showError.bind(this));
  }

  setLocation({coords}: Position) {
    const {latitude, longitude} = coords;
    if (this.lastPosition.latitude !== latitude && this.lastPosition.longitude !== longitude) {
      this.lastPosition = coords;
      if (latitude !== 0 && longitude !== 0) {
        this.wa.checkForActiveZone(coords);
        this.coordinates.next(coords);
      }
    }
  }

  // TODO: listen to errors
  showError(error: PositionError): void {
    this.error.next(error.message);
  }
}
