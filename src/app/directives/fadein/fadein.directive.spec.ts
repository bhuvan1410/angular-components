import { FadeInDirective } from './fadein.directive';

describe('FadeInDirective', () => {
  it('should create an instance', () => {
    const directive = new FadeInDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
