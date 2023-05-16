import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRdvComponent } from './add-edit-rdv.component';

describe('AddEditRdvComponent', () => {
  let component: AddEditRdvComponent;
  let fixture: ComponentFixture<AddEditRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
