import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductmoreguestComponent } from './viewproductmoreguest.component';

describe('ViewproductmoreguestComponent', () => {
  let component: ViewproductmoreguestComponent;
  let fixture: ComponentFixture<ViewproductmoreguestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewproductmoreguestComponent]
    });
    fixture = TestBed.createComponent(ViewproductmoreguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
