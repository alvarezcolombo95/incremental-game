import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolMainComponent } from './futbol-main.component';

describe('FutbolMainComponent', () => {
  let component: FutbolMainComponent;
  let fixture: ComponentFixture<FutbolMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutbolMainComponent]
    });
    fixture = TestBed.createComponent(FutbolMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
