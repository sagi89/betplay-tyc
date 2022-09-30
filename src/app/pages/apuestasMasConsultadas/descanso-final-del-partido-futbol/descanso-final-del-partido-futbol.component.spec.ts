import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescansoFinalDelPartidoFutbolComponent } from './descanso-final-del-partido-futbol.component';

describe('DescansoFinalDelPartidoFutbolComponent', () => {
  let component: DescansoFinalDelPartidoFutbolComponent;
  let fixture: ComponentFixture<DescansoFinalDelPartidoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescansoFinalDelPartidoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescansoFinalDelPartidoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
