import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFeatureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input('appFeatureToggle') featureFlag!: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (!this.featureFlag) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
