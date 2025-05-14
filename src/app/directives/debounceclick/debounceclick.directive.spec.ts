import { DebounceClickDirective } from './debounceclick.directive';

describe('DebounceClickDirective', () => {
  it('should create an instance', () => {
    const directive = new DebounceClickDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
