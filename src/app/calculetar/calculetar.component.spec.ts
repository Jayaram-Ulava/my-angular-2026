import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculetarComponent } from './calculetar.component';

describe('CalculetarComponent', () => {
  let component: CalculetarComponent;
  let fixture: ComponentFixture<CalculetarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculetarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculetarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
