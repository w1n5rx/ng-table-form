import { Component, OnInit, Input } from '@angular/core';
import { Cell, DefaultEditor, ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'smart-table-datepicker',
  templateUrl: './smart-table-datepicker.component.html',
  styleUrls: ['./smart-table-datepicker.component.scss']
})
export class SmartTableDatepickerComponent extends DefaultEditor implements OnInit {

  @Input() placeholder: string = 'Choose a Date';
  @Input() min: Date;
  @Input() max: Date;

  stringValue;
  inputModel: Date;

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.min) {
      this.min = this.cell.getValue();
    }

    if (!this.max) {
      // this.max = new Date(this.min);
      // this.max.setFullYear(this.min.getFullYear() + 1);
      // TODO: Need to avoid this beautiful above logic due to data discrepancy :( i.e. at several occasions start_date > end_date
      this.max = this.cell.getValue();
    }

    if (this.cell.newValue) {
      const cellValue = new Date(this.cell.newValue);
      this.inputModel = cellValue;
      this.cell.newValue = (this.inputModel.getMonth() + 1) + '/' + this.inputModel.getDate() + '/' + this.inputModel.getFullYear();
    }

    if (!this.inputModel) {
      this.inputModel = this.min;
      this.cell.newValue = (this.inputModel.getMonth() + 1) + '/' + this.inputModel.getDate() + '/' + this.inputModel.getFullYear();
    }
  }

  onChange() {
    if (this.inputModel) {
      this.cell.newValue = (this.inputModel.getMonth() + 1) + '/' + this.inputModel.getDate() + '/' + this.inputModel.getFullYear();
    }
  }
}

@Component({
  template: `{{value}}`,
})
export class SmartTableDatepickerRenderComponent implements ViewCell, OnInit {
  @Input() value: string;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() { }

}
