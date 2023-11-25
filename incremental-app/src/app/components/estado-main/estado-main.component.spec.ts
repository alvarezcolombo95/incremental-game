import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoMainComponent } from './estado-main.component';

describe('EstadoMainComponent', () => {
  let component: EstadoMainComponent;
  let fixture: ComponentFixture<EstadoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoMainComponent]
    });
    fixture = TestBed.createComponent(EstadoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
