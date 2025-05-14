import { RippleEffectDirective } from './rippleeffect.directive';

describe('RippleEffectDirective', () => {
  it('should create an instance', () => {
    const directive = new RippleEffectDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
