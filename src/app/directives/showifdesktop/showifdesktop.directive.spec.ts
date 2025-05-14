import { ShowIfDesktopDirective } from './showifdesktop.directive';

describe('ShowIfDesktopDirective', () => {
  it('should create an instance', () => {
    const directive = new ShowIfDesktopDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
