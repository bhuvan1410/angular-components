import { ObserveResizeDirective } from './observeresize.directive';

describe('ObserveResizeDirective', () => {
  it('should create an instance', () => {
    const directive = new ObserveResizeDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
