import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { AddEditDocteurComponent } from './add-edit-docteur.component';

describe('AddEditDocteurComponent', () => {
  let component: AddEditDocteurComponent;
  let fixture: ComponentFixture<AddEditDocteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
