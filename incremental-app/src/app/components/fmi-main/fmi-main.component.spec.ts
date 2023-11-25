import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmiMainComponent } from './fmi-main.component';

describe('FmiMainComponent', () => {
  let component: FmiMainComponent;
  let fixture: ComponentFixture<FmiMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FmiMainComponent]
    });
    fixture = TestBed.createComponent(FmiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
