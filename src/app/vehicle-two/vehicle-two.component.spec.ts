import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTwoComponent } from './vehicle-two.component';

describe('VehicleTwoComponent', () => {
  let component: VehicleTwoComponent;
  let fixture: ComponentFixture<VehicleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
