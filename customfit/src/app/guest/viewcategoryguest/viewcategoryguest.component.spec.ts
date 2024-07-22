import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcategoryguestComponent } from './viewcategoryguest.component';

describe('ViewcategoryguestComponent', () => {
  let component: ViewcategoryguestComponent;
  let fixture: ComponentFixture<ViewcategoryguestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcategoryguestComponent]
    });
    fixture = TestBed.createComponent(ViewcategoryguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
