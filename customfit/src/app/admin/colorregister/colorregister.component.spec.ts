import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorregisterComponent } from './colorregister.component';

describe('ColorregisterComponent', () => {
  let component: ColorregisterComponent;
  let fixture: ComponentFixture<ColorregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorregisterComponent]
    });
    fixture = TestBed.createComponent(ColorregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
