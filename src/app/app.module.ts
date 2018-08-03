import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormModule } from './form/form.module';
import { TableModule } from './table/table.module';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'table',
		pathMatch: 'full'
	},
	{
		path: 'table',
		component: TableComponent
	},
	{
		path: 'form',
		component: FormComponent
	}
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		BrowserAnimationsModule,
		FormModule,
		TableModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule implements OnInit {
	ngOnInit() {
		console.log('AppModule ngOnInit!');
	}
}
