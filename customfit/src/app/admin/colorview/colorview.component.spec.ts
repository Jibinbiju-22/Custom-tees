import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorviewComponent } from './colorview.component';

describe('ColorviewComponent', () => {
  let component: ColorviewComponent;
  let fixture: ComponentFixture<ColorviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorviewComponent]
    });
    fixture = TestBed.createComponent(ColorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
