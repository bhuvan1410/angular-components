import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngAfterViewInit(): void {
    const img = this.el.nativeElement;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const src = img.getAttribute('src');
        if (src) img.src = src;
        observer.unobserve(img);
      }
    });
    observer.observe(img);
  }
}