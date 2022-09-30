import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandicapAsiaticoComponent } from './handicap-asiatico.component';

describe('HandicapAsiaticoComponent', () => {
  let component: HandicapAsiaticoComponent;
  let fixture: ComponentFixture<HandicapAsiaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandicapAsiaticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandicapAsiaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
