import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargenVictoriaExactoFutbolComponent } from './margen-victoria-exacto-futbol.component';

describe('MargenVictoriaExactoFutbolComponent', () => {
  let component: MargenVictoriaExactoFutbolComponent;
  let fixture: ComponentFixture<MargenVictoriaExactoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MargenVictoriaExactoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MargenVictoriaExactoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
