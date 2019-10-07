import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TimerComponent, ITimer } from 'src/app/components/timer/timer.component';
import { IProject, projects } from './projects.data';
import { IZone, zones } from './zones.data';
import { ChooseProjectComponent } from 'src/app/components/choose-project/choose-project.component';

export interface ActiveZone {
  name: string;
  start?: number;
  end?: number;
  project?: string;
  desc?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkAreaService {
  projects: IProject[] = projects;
  zones: IZone[] = zones;
  activeZone: BehaviorSubject<ActiveZone> = new BehaviorSubject({ name: '' });

  constructor(private dialog: MatDialog) {
  }

  checkForActiveZone({ latitude, longitude }: Coordinates): void {
    const zone = this.zones.find(z => Math.abs(z.latitude - latitude) < 0.01 && Math.abs(z.longitude - longitude) < 0.01);
    const activeZone = this.activeZone.getValue();
    if (activeZone.name !== '') {
      if (zone === undefined) {
        this.openTimerDialog({ stop: true, zone: activeZone.name }).subscribe((result: ITimer) => {
          if (result) {
            const data = { projects: this.projects.filter(project => project.zoneName === result.zone) };

            this.dialog.open(ChooseProjectComponent, { data }).afterClosed().subscribe(project => {
              this.stopTimer(result.zone, project);
            });
          }
        });
      }
    } else {
      if (zone !== undefined) {
        this.openTimerDialog({ zone: zone.name }).subscribe((result: ITimer) => {
          if (result) {
            this.startTimer(result.zone);
          }
        });
      }
    }
  }

  startTimer(name: string): void {
    this.activeZone.next({ name, start: Date.now() });
  }

  stopTimer(name: string, project: IProject): void {
    this.activeZone.next({ name, end: Date.now(), ...project });
  }

  openTimerDialog(data: ITimer): Observable<ITimer> {
    return this.dialog.open(TimerComponent, { data }).afterClosed();
  }
}
