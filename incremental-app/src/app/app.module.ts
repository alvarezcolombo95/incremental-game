import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncrementalMainComponent } from './components/incremental-main/incremental-main.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementalMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
