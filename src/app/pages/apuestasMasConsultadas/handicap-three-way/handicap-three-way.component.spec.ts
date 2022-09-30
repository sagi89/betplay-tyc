import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandicapThreeWayComponent } from './handicap-three-way.component';

describe('HandicapThreeWayComponent', () => {
  let component: HandicapThreeWayComponent;
  let fixture: ComponentFixture<HandicapThreeWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandicapThreeWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandicapThreeWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
