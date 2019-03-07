import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestationRectiveComponent } from './form-prestation-rective.component';

describe('FormPrestationRectiveComponent', () => {
  let component: FormPrestationRectiveComponent;
  let fixture: ComponentFixture<FormPrestationRectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrestationRectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrestationRectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
