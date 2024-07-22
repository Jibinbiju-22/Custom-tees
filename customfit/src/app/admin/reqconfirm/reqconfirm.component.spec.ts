import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqconfirmComponent } from './reqconfirm.component';

describe('ReqconfirmComponent', () => {
  let component: ReqconfirmComponent;
  let fixture: ComponentFixture<ReqconfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqconfirmComponent]
    });
    fixture = TestBed.createComponent(ReqconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
