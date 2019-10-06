import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProject } from 'src/app/services/work-area/projects.data';

@Component({
  selector: 'app-choose-project',
  templateUrl: './choose-project.component.html',
  styleUrls: ['./choose-project.component.less']
})
export class ChooseProjectComponent {
  selectedProject: IProject;

  constructor(private dialogRef: MatDialogRef<ChooseProjectComponent>, @Inject(MAT_DIALOG_DATA) public data: { projects: IProject[] }) {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
