import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscButtonComponent } from './misc-button.component';

describe('MiscButtonComponent', () => {
  let component: MiscButtonComponent;
  let fixture: ComponentFixture<MiscButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscButtonComponent]
    });
    fixture = TestBed.createComponent(MiscButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
