import { NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule
	],
	exports: [],
	providers: [],
	declarations: [FormComponent],
	bootstrap: [FormComponent]
})
export class FormModule implements OnInit {
	ngOnInit() {
		console.log('FormModule!');
	}
}
