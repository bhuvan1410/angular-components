import { ConfirmClickDirective } from './confirmclick.directive';
import { ElementRef } from '@angular/core';

describe('ConfirmClickDirective', () => {
  let directive: ConfirmClickDirective;

  beforeEach(() => {
    const mockElementRef = new ElementRef(document.createElement('button'));
    directive = new ConfirmClickDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should allow click when confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const event = new MouseEvent('click');
    const preventSpy = spyOn(event, 'preventDefault');
    const stopSpy = spyOn(event, 'stopImmediatePropagation');

    directive.confirmFirst(event);

    expect(preventSpy).not.toHaveBeenCalled();
    expect(stopSpy).not.toHaveBeenCalled();
  });

  it('should block click when not confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    const event = new MouseEvent('click');
    const preventSpy = spyOn(event, 'preventDefault');
    const stopSpy = spyOn(event, 'stopImmediatePropagation');

    directive.confirmFirst(event);

    expect(preventSpy).toHaveBeenCalled();
    expect(stopSpy).toHaveBeenCalled();
  });
});
