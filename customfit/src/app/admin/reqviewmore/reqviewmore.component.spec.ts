import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqviewmoreComponent } from './reqviewmore.component';

describe('ReqviewmoreComponent', () => {
  let component: ReqviewmoreComponent;
  let fixture: ComponentFixture<ReqviewmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqviewmoreComponent]
    });
    fixture = TestBed.createComponent(ReqviewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
