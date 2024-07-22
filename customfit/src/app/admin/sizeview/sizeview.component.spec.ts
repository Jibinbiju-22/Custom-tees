import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeviewComponent } from './sizeview.component';

describe('SizeviewComponent', () => {
  let component: SizeviewComponent;
  let fixture: ComponentFixture<SizeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizeviewComponent]
    });
    fixture = TestBed.createComponent(SizeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
