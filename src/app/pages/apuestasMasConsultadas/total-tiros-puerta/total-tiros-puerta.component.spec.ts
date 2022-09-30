import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTirosPuertaComponent } from './total-tiros-puerta.component';

describe('TotalTirosPuertaComponent', () => {
  let component: TotalTirosPuertaComponent;
  let fixture: ComponentFixture<TotalTirosPuertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalTirosPuertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalTirosPuertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
