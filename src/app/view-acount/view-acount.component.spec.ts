import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcountComponent } from './view-acount.component';

describe('ViewAcountComponent', () => {
  let component: ViewAcountComponent;
  let fixture: ComponentFixture<ViewAcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
