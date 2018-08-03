import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [],
	providers: [],
	declarations: [
		FormComponent
	]
})
export class FormModule implements OnInit {
	ngOnInit() {
		console.log('FormModule!');
	}
}
