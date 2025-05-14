import { Directive, ElementRef, OnDestroy, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appObserveResize]'
})
export class ObserveResizeDirective implements AfterViewInit, OnDestroy {
  @Output() resize = new EventEmitter<DOMRectReadOnly>();
  private observer!: ResizeObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        this.resize.emit(entry.contentRect);
      }
    });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
