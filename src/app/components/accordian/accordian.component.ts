import { Component,Input } from '@angular/core';
import { AccordionItem } from './accordian-item.interface';
@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent {

  @Input() public items: AccordionItem[] = [];

  public toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }


}
