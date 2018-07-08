import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintProfileComponent } from './saint.profile.component';

describe('SaintProfileComponent', () => {
  let component: SaintProfileComponent;
  let fixture: ComponentFixture<SaintProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
