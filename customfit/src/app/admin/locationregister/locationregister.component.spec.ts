import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationregisterComponent } from './locationregister.component';

describe('LocationregisterComponent', () => {
  let component: LocationregisterComponent;
  let fixture: ComponentFixture<LocationregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationregisterComponent]
    });
    fixture = TestBed.createComponent(LocationregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
