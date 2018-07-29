import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: String = "ng-table-form";

  settings = {
    columns: {
      id: {
        title: 'ID',
        editable: false,
        width: '5%'
      },
      city: {
        title: 'City'
      },
      start_date: {
        title: 'Start date',
      },
      end_date: {
        title: 'End date'
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
