import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOFormComponent } from './a-o-form.component';

describe('AOFormComponent', () => {
  let component: AOFormComponent;
  let fixture: ComponentFixture<AOFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AOFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
