import { BlurOnHoverDirective } from './bluronhover.directive';

describe('BlurOnHoverDirective', () => {
  it('should create an instance', () => {
    const directive = new BlurOnHoverDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
