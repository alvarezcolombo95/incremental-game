import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroMainComponent } from './agro-main.component';

describe('AgroMainComponent', () => {
  let component: AgroMainComponent;
  let fixture: ComponentFixture<AgroMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgroMainComponent]
    });
    fixture = TestBed.createComponent(AgroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
