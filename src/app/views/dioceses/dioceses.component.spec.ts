import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiocesesComponent } from './dioceses.component';

describe('DiocesesComponent', () => {
  let component: DiocesesComponent;
  let fixture: ComponentFixture<DiocesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiocesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiocesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
