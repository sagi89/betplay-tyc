import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPuntosTenisMesaComponent } from './total-puntos-tenis-mesa.component';

describe('TotalPuntosTenisMesaComponent', () => {
  let component: TotalPuntosTenisMesaComponent;
  let fixture: ComponentFixture<TotalPuntosTenisMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPuntosTenisMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPuntosTenisMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
