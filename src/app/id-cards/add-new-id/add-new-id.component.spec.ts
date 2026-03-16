import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewIDComponent } from './add-new-id.component';

describe('AddNewIDComponent', () => {
  let component: AddNewIDComponent;
  let fixture: ComponentFixture<AddNewIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
