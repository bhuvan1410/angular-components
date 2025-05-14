import { PasswordToggleDirective } from './passwordtoggle.directive';

describe('PasswordToggleDirective', () => {
  it('should create an instance', () => {
    const directive = new PasswordToggleDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
