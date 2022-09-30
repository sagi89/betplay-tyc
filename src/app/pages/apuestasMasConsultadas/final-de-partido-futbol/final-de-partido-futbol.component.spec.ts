import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDePartidoFutbolComponent } from './final-de-partido-futbol.component';

describe('FinalDePartidoFutbolComponent', () => {
  let component: FinalDePartidoFutbolComponent;
  let fixture: ComponentFixture<FinalDePartidoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalDePartidoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDePartidoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
