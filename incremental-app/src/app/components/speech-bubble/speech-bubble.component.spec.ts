import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechBubbleComponent } from './speech-bubble.component';

describe('SpeechBubbleComponent', () => {
  let component: SpeechBubbleComponent;
  let fixture: ComponentFixture<SpeechBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechBubbleComponent]
    });
    fixture = TestBed.createComponent(SpeechBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
