import { FormService } from './form.service';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [FormService],
  declarations: []
})
export class FormModule implements OnInit {
  ngOnInit() {
    console.log('FormModule!');
  }
}
