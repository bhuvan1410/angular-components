import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBlurOnHover]'
})
export class BlurOnHoverDirective {
  constructor(private el: ElementRef) {
    // Basic directive logic here
  }
}
