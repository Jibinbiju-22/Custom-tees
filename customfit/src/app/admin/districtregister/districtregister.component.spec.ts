import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictregisterComponent } from './districtregister.component';

describe('DistrictregisterComponent', () => {
  let component: DistrictregisterComponent;
  let fixture: ComponentFixture<DistrictregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictregisterComponent]
    });
    fixture = TestBed.createComponent(DistrictregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
