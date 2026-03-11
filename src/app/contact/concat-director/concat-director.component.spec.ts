import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatDirectorComponent } from './concat-director.component';

describe('ConcatDirectorComponent', () => {
  let component: ConcatDirectorComponent;
  let fixture: ComponentFixture<ConcatDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
