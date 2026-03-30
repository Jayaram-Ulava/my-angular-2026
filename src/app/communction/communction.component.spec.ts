import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunctionComponent } from './communction.component';

describe('CommunctionComponent', () => {
  let component: CommunctionComponent;
  let fixture: ComponentFixture<CommunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
