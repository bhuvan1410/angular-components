import { Directive, HostListener, Input } from '@angular/core';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { Subject } from 'rxjs';

@Directive({
  selector: '[debounceClick]'
})
export class DebounceClickDirective {
  @Input() debounceTime = 300;
  private clickSubject = new Subject<Event>();

  constructor() {
    this.clickSubject.pipe(debounceTime(this.debounceTime), switchMap(() => this.handleClick())).subscribe();
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.clickSubject.next(event);
  }

  handleClick() {
    // You can define this method to trigger an event or do something specific
    console.log('Debounced click!');
    return new Observable(); // return whatever observable you want here
  }
}
