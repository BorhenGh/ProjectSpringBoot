import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDoctPatientComponent } from './add-edit-doct-patient.component';

describe('AddEditDoctPatientComponent', () => {
  let component: AddEditDoctPatientComponent;
  let fixture: ComponentFixture<AddEditDoctPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDoctPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDoctPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
