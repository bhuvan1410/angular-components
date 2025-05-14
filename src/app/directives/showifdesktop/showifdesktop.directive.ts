import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIfDesktop]'
})
export class ShowIfDesktopDirective {
  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef) {
    const isDesktop = window.innerWidth > 768;
    if (isDesktop) {
      viewContainer.createEmbeddedView(templateRef);
    } else {
      viewContainer.clear();
    }
  }
}
