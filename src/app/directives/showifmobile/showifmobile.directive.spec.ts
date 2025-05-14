import { ShowIfMobileDirective } from './showifmobile.directive';

describe('ShowIfMobileDirective', () => {
  it('should create an instance', () => {
    const directive = new ShowIfMobileDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
