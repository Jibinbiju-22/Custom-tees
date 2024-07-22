import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductguestComponent } from './viewproductguest.component';

describe('ViewproductguestComponent', () => {
  let component: ViewproductguestComponent;
  let fixture: ComponentFixture<ViewproductguestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewproductguestComponent]
    });
    fixture = TestBed.createComponent(ViewproductguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
