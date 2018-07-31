import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppService } from './app.service';
import { SmartTableDatepickerRenderComponent, SmartTableDatepickerComponent } from './smart-table-datepicker.component';

import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: AppComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,
    FormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ],
  exports: [SmartTableDatepickerRenderComponent],
  providers: [AppService],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent
  ]
})
export class AppModule { }
