import { FeatureToggleDirective } from './featuretoggle.directive';

describe('FeatureToggleDirective', () => {
  it('should create an instance', () => {
    const directive = new FeatureToggleDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
