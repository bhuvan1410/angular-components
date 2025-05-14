import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIfMobile]'
})
export class ShowIfMobileDirective {
  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      viewContainer.createEmbeddedView(templateRef);
    } else {
      viewContainer.clear();
    }
  }
}
