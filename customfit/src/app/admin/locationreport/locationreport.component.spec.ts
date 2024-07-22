import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationreportComponent } from './locationreport.component';

describe('LocationreportComponent', () => {
  let component: LocationreportComponent;
  let fixture: ComponentFixture<LocationreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationreportComponent]
    });
    fixture = TestBed.createComponent(LocationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
