import { Component } from '@angular/core';
import { WorkAreaService } from 'src/app/services/work-area/work-area.service';
import { IZone } from 'src/app/services/work-area/zones.data';

@Component({
  selector: 'app-zones-container',
  templateUrl: './zones-container.component.html',
  styleUrls: ['./zones-container.component.less']
})
export class ZonesContainerComponent {
  zones: IZone[];
  active: string;
  constructor(private wa: WorkAreaService) {
    this.zones = this.wa.zones;
    this.wa.activeZone.subscribe(az => this.active = az.name);
  }
}
