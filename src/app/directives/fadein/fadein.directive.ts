import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;
    el.style.opacity = 0;
    el.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
      el.style.opacity = 1;
    });
  }
}
