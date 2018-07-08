import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintsComponent } from './saints.component';

describe('SaintsComponent', () => {
  let component: SaintsComponent;
  let fixture: ComponentFixture<SaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
