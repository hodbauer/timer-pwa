import { Component } from '@angular/core';
import { GetLocationService } from 'src/app/services/get-location/get-location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-location',
  templateUrl: './check-location.component.html',
  styleUrls: ['./check-location.component.less']
})
export class CheckLocationComponent {
  location: Observable<Coordinates>;

  constructor(private locationService: GetLocationService) {
    this.location = this.locationService.coordinates.asObservable();
   }
}
