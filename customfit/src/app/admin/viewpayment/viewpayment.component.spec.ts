import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentComponent } from './viewpayment.component';

describe('ViewpaymentComponent', () => {
  let component: ViewpaymentComponent;
  let fixture: ComponentFixture<ViewpaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpaymentComponent]
    });
    fixture = TestBed.createComponent(ViewpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
