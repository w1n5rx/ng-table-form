import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";

import { Ng2SmartTableModule } from "ng2-smart-table";

import { AppService } from './app.service';
import { AppComponent } from "./app.component";

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [AppService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
