import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCorrectoComponent } from './resultado-correcto.component';

describe('ResultadoCorrectoComponent', () => {
  let component: ResultadoCorrectoComponent;
  let fixture: ComponentFixture<ResultadoCorrectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoCorrectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoCorrectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
