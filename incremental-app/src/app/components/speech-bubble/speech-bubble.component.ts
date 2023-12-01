import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrls: ['./speech-bubble.component.css']
})
export class SpeechBubbleComponent {

  constructor(private IncrementalMain: IncrementalMainService) {}

  get sunText(){
    return this.IncrementalMain.getSunText()
  }

  get sunBubble(){
    return this.IncrementalMain.getSunBubble()
  }

}
