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



@NgModule({
  declarations: [
    AppComponent,
    IncrementalMainComponent,
    AgroMainComponent,
    FutbolMainComponent,
    FmiMainComponent,
    EstadoMainComponent,
    AfipMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
