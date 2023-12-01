import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAltGovComponent } from './select-alt-gov.component';

describe('SelectAltGovComponent', () => {
  let component: SelectAltGovComponent;
  let fixture: ComponentFixture<SelectAltGovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAltGovComponent]
    });
    fixture = TestBed.createComponent(SelectAltGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
