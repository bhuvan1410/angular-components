import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisableControl]'
})
export class DisableControlDirective implements OnChanges {
  @Input() appDisableControl: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('appDisableControl' in changes) {
      if (this.appDisableControl) {
        this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
      } else {
        this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
      }
    }
  }
}
