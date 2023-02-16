import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxExamplesComponent } from './flex-box-examples.component';

describe('FlexBoxExamplesComponent', () => {
  let component: FlexBoxExamplesComponent;
  let fixture: ComponentFixture<FlexBoxExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexBoxExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexBoxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
