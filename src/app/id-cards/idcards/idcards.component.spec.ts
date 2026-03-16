import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardsComponent } from './idcards.component';

describe('IdcardsComponent', () => {
  let component: IdcardsComponent;
  let fixture: ComponentFixture<IdcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
