import { AutoFocusDirective } from './auto-focus.directive';
import { ElementRef } from '@angular/core';

describe('AutoFocusDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('input')
    };

    const directive = new AutoFocusDirective(mockElementRef as ElementRef<HTMLInputElement>);
    expect(directive).toBeTruthy();
  });
});