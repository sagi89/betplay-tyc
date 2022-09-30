import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalGolesComponent } from './total-goles.component';

describe('TotalGolesComponent', () => {
  let component: TotalGolesComponent;
  let fixture: ComponentFixture<TotalGolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalGolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalGolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
