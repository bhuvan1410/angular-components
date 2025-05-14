import { HideOnScrollDirective } from './hideonscroll.directive';

describe('HideOnScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new HideOnScrollDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
