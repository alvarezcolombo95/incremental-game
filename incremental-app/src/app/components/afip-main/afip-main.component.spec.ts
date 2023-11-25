import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfipMainComponent } from './afip-main.component';

describe('AfipMainComponent', () => {
  let component: AfipMainComponent;
  let fixture: ComponentFixture<AfipMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfipMainComponent]
    });
    fixture = TestBed.createComponent(AfipMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
