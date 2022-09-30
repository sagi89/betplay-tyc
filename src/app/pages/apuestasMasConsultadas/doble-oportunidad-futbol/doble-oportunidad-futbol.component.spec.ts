import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleOportunidadFutbolComponent } from './doble-oportunidad-futbol.component';

describe('DobleOportunidadFutbolComponent', () => {
  let component: DobleOportunidadFutbolComponent;
  let fixture: ComponentFixture<DobleOportunidadFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobleOportunidadFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DobleOportunidadFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
