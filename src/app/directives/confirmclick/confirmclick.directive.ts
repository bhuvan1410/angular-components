import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmClick]'
})
export class ConfirmClickDirective {
  @Input('appConfirmClick') confirmMessage = 'Are you sure?';

  @HostListener('click', ['$event'])
  confirmFirst(event: Event): void {
    const confirmed = window.confirm(this.confirmMessage);
    if (!confirmed) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }
}