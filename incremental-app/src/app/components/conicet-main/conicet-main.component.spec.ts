import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConicetMainComponent } from './conicet-main.component';

describe('ConicetMainComponent', () => {
  let component: ConicetMainComponent;
  let fixture: ComponentFixture<ConicetMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConicetMainComponent]
    });
    fixture = TestBed.createComponent(ConicetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
