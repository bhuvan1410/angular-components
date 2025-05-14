import { AnimateOnScrollDirective } from './animateonscroll.directive';

describe('AnimateOnScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new AnimateOnScrollDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
