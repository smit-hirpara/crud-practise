import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StapperFormComponent } from './stapper-form.component';

describe('StapperFormComponent', () => {
  let component: StapperFormComponent;
  let fixture: ComponentFixture<StapperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StapperFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StapperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
