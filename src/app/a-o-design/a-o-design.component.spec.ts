import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AODesignComponent } from './a-o-design.component';

describe('AODesignComponent', () => {
  let component: AODesignComponent;
  let fixture: ComponentFixture<AODesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AODesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AODesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
