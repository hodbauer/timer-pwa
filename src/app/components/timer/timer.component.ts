import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ITimer {
  zone: string;
  stop?: boolean;
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent {
  constructor(private dialogRef: MatDialogRef<TimerComponent>, @Inject(MAT_DIALOG_DATA) public data: ITimer = {zone: '', stop: false}) {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
