import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';

import { TableService } from './table.service';
import { TableComponent } from './table.component';
// tslint:disable-next-line:max-line-length
import { SmartTableDatepickerRenderComponent, SmartTableDatepickerComponent } from '../smart-table-datepicker/smart-table-datepicker.component';

@NgModule({
	imports: [
		CommonModule,
		Ng2SmartTableModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
		FormsModule
	],
	exports: [
		SmartTableDatepickerRenderComponent
	],
	declarations: [
		TableComponent,
		SmartTableDatepickerComponent,
		SmartTableDatepickerRenderComponent
	],
	providers: [TableService],
	entryComponents: [
		SmartTableDatepickerComponent,
		SmartTableDatepickerRenderComponent
	]
})
export class TableModule implements OnInit {
	ngOnInit() {
		console.log('TableModule!');
	}
}
