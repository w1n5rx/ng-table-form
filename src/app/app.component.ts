import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { AppSettingsService } from './app-settings.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ng-table-form";

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
        title: 'Start date'
      },
      end_date: {
        title: 'End date'
      },
      price: {
        title: 'Price'
      },
      status: {
        title: 'Status'
      },
      color: {
        title: 'Color'
      }
    }
  };

  data: Array<object>;
  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(data2 => {
      this.data = data2;
    });
  }
}
