import { Component } from '@angular/core';
import { WorkAreaService } from 'src/app/services/work-area/work-area.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.less']
})
export class StatusComponent {
  name: string;
  start: number;
  end: number;
  project: string;
  description: string;

  constructor(private wa: WorkAreaService) {
    this.wa.activeZone.subscribe(activeZone => {
      console.log(activeZone);

      this.name = activeZone.name;
      if (activeZone.start) {
        this.start = activeZone.start;
      }
      if (activeZone.end) {
        this.end = activeZone.end;
      }

      if (activeZone.project) {
        this.project = activeZone.project;
      }

      if (activeZone.desc) {
        this.description = activeZone.desc;
      }
    });
  }
}
