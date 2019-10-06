import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesContainerComponent } from './zones-container.component';

describe('ZonesContainerComponent', () => {
  let component: ZonesContainerComponent;
  let fixture: ComponentFixture<ZonesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
