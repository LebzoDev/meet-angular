import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBiensComponent } from './reservation-biens.component';

describe('ReservationBiensComponent', () => {
  let component: ReservationBiensComponent;
  let fixture: ComponentFixture<ReservationBiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationBiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
