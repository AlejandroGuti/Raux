import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAverageComponent } from './calc-average.component';

describe('CalcAverageComponent', () => {
  let component: CalcAverageComponent;
  let fixture: ComponentFixture<CalcAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
