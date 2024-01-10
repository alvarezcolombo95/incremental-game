import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceMainComponent } from './space-main.component';

describe('SpaceMainComponent', () => {
  let component: SpaceMainComponent;
  let fixture: ComponentFixture<SpaceMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceMainComponent]
    });
    fixture = TestBed.createComponent(SpaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
