import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PBarComponent } from './p-bar/p-bar.component';
import { PBarListComponent } from './p-bar-list/p-bar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PBarComponent,
    PBarListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
