import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTarjetasComponent } from './total-tarjetas.component';

describe('TotalTarjetasComponent', () => {
  let component: TotalTarjetasComponent;
  let fixture: ComponentFixture<TotalTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalTarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
