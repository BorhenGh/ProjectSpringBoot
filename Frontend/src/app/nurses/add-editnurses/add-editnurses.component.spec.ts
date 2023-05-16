import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditnursesComponent } from './add-editnurses.component';

describe('AddEditnursesComponent', () => {
  let component: AddEditnursesComponent;
  let fixture: ComponentFixture<AddEditnursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditnursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditnursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
