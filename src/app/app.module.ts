import { AppSettingsService } from './app-settings.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule
  ],
  providers: [AppSettingsService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
