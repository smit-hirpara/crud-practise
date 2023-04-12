import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOStapperComponent } from './a-o-stapper.component';

describe('AOStapperComponent', () => {
  let component: AOStapperComponent;
  let fixture: ComponentFixture<AOStapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOStapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AOStapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
