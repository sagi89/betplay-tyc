import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDisparosTirosFutbolComponent } from './total-disparos-tiros-futbol.component';

describe('TotalDisparosTirosFutbolComponent', () => {
  let component: TotalDisparosTirosFutbolComponent;
  let fixture: ComponentFixture<TotalDisparosTirosFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDisparosTirosFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDisparosTirosFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
