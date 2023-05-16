import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPharmacienComponent } from './add-edit-pharmacien.component';

describe('AddEditPharmacienComponent', () => {
  let component: AddEditPharmacienComponent;
  let fixture: ComponentFixture<AddEditPharmacienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPharmacienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPharmacienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
