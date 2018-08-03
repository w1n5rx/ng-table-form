// tslint:disable-next-line:max-line-length
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './../smart-table-datepicker/smart-table-datepicker.component';
import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	data: Array<object>;
	settings = {
		add: {
			addButtonContent: '<i class="material-icons">add_box</i>',
			createButtonContent: '<i class="material-icons">save</i>',
			cancelButtonContent: '<i class="material-icons">cancel</i>',
		},
		edit: {
			editButtonContent: '<i class="material-icons">edit</i>',
			saveButtonContent: '<i class="material-icons">save</i>',
			cancelButtonContent: '<i class="material-icons">cancel</i>',
		},
		delete: {
			deleteButtonContent: '<i class="material-icons">delete</i>',
			confirmDelete: true,
		},
		pager: {
			perPage: 10
			// pagination default is 4; unchangeable :( open issue: https://github.com/akveo/ng2-smart-table/issues/590
		},
		columns: {
			id: {
				title: 'ID',
				sort: true,
				sortDirection: 'asc',
				editable: false,
				width: '5%'
			},
			city: {
				title: 'City'
			},
			start_date: {
				title: 'Start date',
				type: 'custom',
				renderComponent: SmartTableDatepickerRenderComponent,
				width: '250px',
				filter: true,
				editor: {
					type: 'custom',
					component: SmartTableDatepickerComponent,
				}
			},
			end_date: {
				title: 'End date',
				type: 'custom',
				renderComponent: SmartTableDatepickerRenderComponent,
				width: '250px',
				filter: true,
				editor: {
					type: 'custom',
					component: SmartTableDatepickerComponent,
				}
			},
			price: {
				title: 'Price'
			},
			status: {
				title: 'Status',
				type: 'html',
				editor: {
					type: 'list',
					config: {
						list: [
							{ value: 'Often', title: 'Often' },
							{ value: 'Yearly', title: 'Yearly' },
							{ value: 'Monthly', title: 'Monthly' },
							{ value: 'Weekly', title: 'Weekly' },
							{ value: 'Seldom', title: 'Seldom' },
							{ value: 'Once', title: 'Once' },
							{ value: 'Never', title: 'Never' }
						],
					},
				}
			},
			color: {
				title: 'Color'
			}
		}
	};

	constructor(private tableSettingsService: TableService) { }
	ngOnInit() {
		this.tableSettingsService.getJSON().subscribe(d => {
			this.data = d;
		});
	}

	onDeleteConfirm(event): void {
		if (window.confirm('Are you sure you want to delete?')) {
			event.confirm.resolve();
		} else {
			event.confirm.reject();
		}
	}
}
