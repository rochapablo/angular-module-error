import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PabloPaginationModule } from 'my-dream-app/dist/pablo-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PabloPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
