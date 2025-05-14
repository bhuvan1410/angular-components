import { AutoResizeDirective } from './autoresize.directive';

describe('AutoResizeDirective', () => {
  it('should create an instance', () => {
    const directive = new AutoResizeDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
