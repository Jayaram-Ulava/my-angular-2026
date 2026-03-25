import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountCreateComponent } from './acount-create.component';

describe('AcountCreateComponent', () => {
  let component: AcountCreateComponent;
  let fixture: ComponentFixture<AcountCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcountCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcountCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
