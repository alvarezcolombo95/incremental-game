import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalMainComponent } from './incremental-main.component';

describe('IncrementalMainComponent', () => {
  let component: IncrementalMainComponent;
  let fixture: ComponentFixture<IncrementalMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementalMainComponent]
    });
    fixture = TestBed.createComponent(IncrementalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
