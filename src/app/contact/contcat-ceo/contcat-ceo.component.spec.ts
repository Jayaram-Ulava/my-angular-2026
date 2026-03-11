import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcatCeoComponent } from './contcat-ceo.component';

describe('ContcatCeoComponent', () => {
  let component: ContcatCeoComponent;
  let fixture: ComponentFixture<ContcatCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContcatCeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContcatCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
