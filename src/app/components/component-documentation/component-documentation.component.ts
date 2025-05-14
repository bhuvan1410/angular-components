import { Component } from '@angular/core';
import { AccordionItem } from '../accordian/accordian-item.interface';
import { LoaderType } from '../loader/loader-type.enum';
import { PillType } from '../pill/pill-type.enum';
import { RibbonType } from '../ribbon/ribbon-type';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';




@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent {

  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    }
  ];

  public isShownOverlay = false;


  public PillType = PillType;

  public progressValue = 25;

  public toggleValue = false;

  public loaderType = LoaderType.Loading;

  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.BottomLeft };
  snackBar: any;

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }

  public loaded = false;
 






}
