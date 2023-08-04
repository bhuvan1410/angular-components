import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar-service';
import { CalcService } from '../calc.service';
import { SortingService } from '../sorting/sorting-service';
import { DialogService } from '../dialog/dialog-service';


@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  template: `
    <h3>Services</h3>
    <app-card [title]="'Dialog Service'" [subTitle]="'Service'">
      <div body>
        <p>Dialog Example:</p>
        <button (click)="openDialog()">Open Dialog</button>
      </div>
    </app-card>
  `,
  styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent {

  unsortedArray: number[] = [6, 2, 9, 1, 5];
  sortedArray: number[] | undefined;

  constructor(private calculatorService: CalcService,
    public route: ActivatedRoute,
    public snackbarService: SnackbarService,
    public sortingService: SortingService,
    private dialogService: DialogService
  ) { }

  calculate(): void {
    try {
      const result = this.calculatorService.add(5, 10);
      const result2 = this.calculatorService.divide(5,10);
      const result3 = this.calculatorService.multiply(5,10);
      const result4 = this.calculatorService.subtract(5,10);
      console.log('Addition Result of 5 and 10:', result);
      console.log('Division Result of 5 and 10:', result2);
      console.log('Multiplication Result of 5 and 10:', result3);
      console.log('Subtraction Result of 5 and 10:', result4);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  openDialog(): void {
    const content = `
      <h3>Hello, I am a dialog!</h3>
      <p>This is the content of the dialog.</p>
    `;
    this.dialogService.openDialog(content);
  }

  sortArray(): void {
    this.sortedArray = this.sortingService.bubbleSort([...this.unsortedArray]);
    console.log('Sorted Array:', this.sortedArray);
  }


  public callSnackbar(): void {
    this.snackbarService.callSnackbar('snackbar service');
  }



}