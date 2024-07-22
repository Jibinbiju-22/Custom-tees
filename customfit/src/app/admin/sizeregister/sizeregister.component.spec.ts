import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeregisterComponent } from './sizeregister.component';

describe('SizeregisterComponent', () => {
  let component: SizeregisterComponent;
  let fixture: ComponentFixture<SizeregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizeregisterComponent]
    });
    fixture = TestBed.createComponent(SizeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
