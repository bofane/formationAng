import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { gabaritsComponent } from './gabarits.component';

describe('gabaritsComponent', () => {
  let component: gabaritsComponent;
  let fixture: ComponentFixture<gabaritsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ gabaritsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(gabaritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
