import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCornersFutbolComponent } from './total-corners-futbol.component';

describe('TotalCornersFutbolComponent', () => {
  let component: TotalCornersFutbolComponent;
  let fixture: ComponentFixture<TotalCornersFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCornersFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCornersFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
