import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { SmartTableDatepickerRenderComponent, SmartTableDatepickerComponent } from './smart-table-datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ],
  exports: [SmartTableDatepickerRenderComponent]
  providers: [AppService],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent
  ]
})
export class AppModule { }
