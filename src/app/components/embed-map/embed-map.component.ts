import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GetLocationService } from 'src/app/services/get-location/get-location.service';

const longThreshold = 0.002;
const latThreshold = 0.001;

@Component({
  selector: 'app-embed-map',
  templateUrl: './embed-map.component.html',
  styleUrls: ['./embed-map.component.less']
})
export class EmbedMapComponent {
  src: SafeResourceUrl;

  constructor(private ds: DomSanitizer, private locationService: GetLocationService) {
    this.locationService.coordinates.subscribe(({latitude, longitude}) => {
      const marker = `${latitude},${longitude}`;
      // bbox = left,          bottom,       right,         top
      // bbox = min Longitude, min Latitude, max Longitude, max Latitude
      const bbox = `${longitude - longThreshold},${latitude - latThreshold},${longitude + longThreshold},${latitude + latThreshold}`;
      const str = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
      this.src = this.ds.bypassSecurityTrustResourceUrl(str);
    });
  }
}
