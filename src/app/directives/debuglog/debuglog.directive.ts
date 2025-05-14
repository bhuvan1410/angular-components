import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDebugLog]'
})
export class DebugLogDirective {
  constructor(private el: ElementRef) {
    // Basic directive logic here
  }
}
