import { ClickOutsideDirective } from './clickoutside.directive';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const directive = new ClickOutsideDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
