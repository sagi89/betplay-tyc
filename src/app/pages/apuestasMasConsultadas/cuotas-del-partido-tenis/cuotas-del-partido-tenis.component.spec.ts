import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotasDelPartidoTenisComponent } from './cuotas-del-partido-tenis.component';

describe('CuotasDelPartidoTenisComponent', () => {
  let component: CuotasDelPartidoTenisComponent;
  let fixture: ComponentFixture<CuotasDelPartidoTenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuotasDelPartidoTenisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotasDelPartidoTenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
