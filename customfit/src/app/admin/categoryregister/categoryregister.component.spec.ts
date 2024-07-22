import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryregisterComponent } from './categoryregister.component';

describe('CategoryregisterComponent', () => {
  let component: CategoryregisterComponent;
  let fixture: ComponentFixture<CategoryregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryregisterComponent]
    });
    fixture = TestBed.createComponent(CategoryregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
