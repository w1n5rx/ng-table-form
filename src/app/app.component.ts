import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './smart-table-datepicker.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: String = "ng-table-form";

  settings = {
    pager: {
      perPage: 10,
      // pagination default is 4; unchangeable :( open issue: https://github.com/akveo/ng2-smart-table/issues/590
    }
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

  data: Array<object>;
  constructor(private appSettingsService: AppService) { }

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(d => {
      this.data = d;
    });
  }

}
