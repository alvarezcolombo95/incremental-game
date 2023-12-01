import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IncrementalMainComponent } from './components/incremental-main/incremental-main.component';
import { AgroMainComponent } from './components/agro-main/agro-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { FutbolMainComponent } from './components/futbol-main/futbol-main.component';
import { FmiMainComponent } from './components/fmi-main/fmi-main.component';
import { EstadoMainComponent } from './components/estado-main/estado-main.component';
import { AfipMainComponent } from './components/afip-main/afip-main.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SelectAltGovComponent } from './components/select-alt-gov/select-alt-gov.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import { ArmyMainComponent } from './components/army-main/army-main.component';
import { SpeechBubbleComponent } from './components/speech-bubble/speech-bubble.component'; 



@NgModule({
  declarations: [
    AppComponent,
    IncrementalMainComponent,
    AgroMainComponent,
    FutbolMainComponent,
    FmiMainComponent,
    EstadoMainComponent,
    AfipMainComponent,
    SelectAltGovComponent,
    ArmyMainComponent,
    SpeechBubbleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
