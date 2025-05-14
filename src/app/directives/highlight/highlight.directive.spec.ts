import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
