import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinPartProrrIncludFutBaskComponent } from './win-part-prorr-includ-fut-bask.component';

describe('WinPartProrrIncludFutBaskComponent', () => {
  let component: WinPartProrrIncludFutBaskComponent;
  let fixture: ComponentFixture<WinPartProrrIncludFutBaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinPartProrrIncludFutBaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinPartProrrIncludFutBaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
