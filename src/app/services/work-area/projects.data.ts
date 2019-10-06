export interface IProject {
  zoneName: string;
  name: string;
  descRequired: boolean;
}

export const projects: IProject[] = [
  {
    name: 'Training',
    zoneName: 'Webiks',
    descRequired: true
  },
  {
    name: 'Random',
    zoneName: 'Webiks',
    descRequired: false
  },
  {
    name: 'Horizon',
    zoneName: 'Bauer',
    descRequired: false
  },
  {
    name: 'Vertical',
    zoneName: 'Bauer',
    descRequired: false
  },
  {
    name: 'LCD',
    zoneName: 'Hod',
    descRequired: false
  },
  {
    name: 'VIP',
    zoneName: 'Hod',
    descRequired: true
  }
];
