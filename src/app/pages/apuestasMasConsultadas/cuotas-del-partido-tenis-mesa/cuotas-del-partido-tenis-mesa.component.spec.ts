import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotasDelPartidoTenisMesaComponent } from './cuotas-del-partido-tenis-mesa.component';

describe('CuotasDelPartidoTenisMesaComponent', () => {
  let component: CuotasDelPartidoTenisMesaComponent;
  let fixture: ComponentFixture<CuotasDelPartidoTenisMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuotasDelPartidoTenisMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotasDelPartidoTenisMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
