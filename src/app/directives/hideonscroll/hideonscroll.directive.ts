import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideOnScroll]'
})
export class HideOnScrollDirective {
  private lastScroll = 0;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  onScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScroll) {
      this.el.nativeElement.style.transform = 'translateY(-100%)';
    } else {
      this.el.nativeElement.style.transform = 'translateY(0)';
    }
    this.lastScroll = currentScroll;
  }
}
