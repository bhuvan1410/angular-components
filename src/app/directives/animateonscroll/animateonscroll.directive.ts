import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective {
  constructor(private el: ElementRef) {
    // Basic directive logic here
  }
}
