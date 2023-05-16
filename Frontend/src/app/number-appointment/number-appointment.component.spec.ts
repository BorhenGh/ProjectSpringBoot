import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAppointmentComponent } from './number-appointment.component';

describe('NumberAppointmentComponent', () => {
  let component: NumberAppointmentComponent;
  let fixture: ComponentFixture<NumberAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
