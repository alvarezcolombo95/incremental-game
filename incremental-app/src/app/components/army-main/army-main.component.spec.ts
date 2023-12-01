import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyMainComponent } from './army-main.component';

describe('ArmyMainComponent', () => {
  let component: ArmyMainComponent;
  let fixture: ComponentFixture<ArmyMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmyMainComponent]
    });
    fixture = TestBed.createComponent(ArmyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
