import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLoadingSkeleton]'
})
export class LoadingSkeletonDirective {
  constructor(private el: ElementRef) {
    // Basic directive logic here
  }
}
