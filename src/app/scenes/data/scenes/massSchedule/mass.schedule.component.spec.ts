import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassScheduleComponent } from './mass.schedule.component';

describe('MassScheduleComponent', () => {
  let component: MassScheduleComponent;
  let fixture: ComponentFixture<MassScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
