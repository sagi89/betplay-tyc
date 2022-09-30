import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandicapSetsDeportesRaquetaComponent } from './handicap-sets-deportes-raqueta.component';

describe('HandicapSetsDeportesRaquetaComponent', () => {
  let component: HandicapSetsDeportesRaquetaComponent;
  let fixture: ComponentFixture<HandicapSetsDeportesRaquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandicapSetsDeportesRaquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandicapSetsDeportesRaquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
