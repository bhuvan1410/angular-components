import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
  @Input() public tableData: any[] = [
    { first: 'Bhuvan 1', last: 'Yerramsetty', dob: '06/15/2003' },
    { first: 'Bhuvan 2', last: 'Yerramsetty', dob: '06/15/2003' },
    { first: 'Bhuvan 3', last: 'Yerramsetty', dob: '06/15/2003' },
    { first: 'Bhuvan 4', last: 'Yerramsetty', dob: '06/15/2003' },
  ];

  @Output() public headerSelected = new EventEmitter<{ key: string, value: any }>();

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }

  public getTableHeaderKeys(): string[] {
    if (this.tableData.length > 0) {
      return Object.keys(this.tableData[0]);
    }
    return [];
  }
}