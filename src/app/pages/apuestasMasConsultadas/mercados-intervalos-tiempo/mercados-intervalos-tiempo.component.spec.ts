import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosIntervalosTiempoComponent } from './mercados-intervalos-tiempo.component';

describe('MercadosIntervalosTiempoComponent', () => {
  let component: MercadosIntervalosTiempoComponent;
  let fixture: ComponentFixture<MercadosIntervalosTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadosIntervalosTiempoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosIntervalosTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
