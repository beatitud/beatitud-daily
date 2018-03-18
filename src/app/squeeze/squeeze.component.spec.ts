import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqueezeComponent } from './squeeze.component';

describe('SqueezeComponent', () => {
  let component: SqueezeComponent;
  let fixture: ComponentFixture<SqueezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqueezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqueezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
