import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductmoreComponent } from './viewproductmore.component';

describe('ViewproductmoreComponent', () => {
  let component: ViewproductmoreComponent;
  let fixture: ComponentFixture<ViewproductmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewproductmoreComponent]
    });
    fixture = TestBed.createComponent(ViewproductmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
