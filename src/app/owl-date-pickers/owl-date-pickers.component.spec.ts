import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlDatePickersComponent } from './owl-date-pickers.component';

describe('OwlDatePickersComponent', () => {
  let component: OwlDatePickersComponent;
  let fixture: ComponentFixture<OwlDatePickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlDatePickersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlDatePickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
