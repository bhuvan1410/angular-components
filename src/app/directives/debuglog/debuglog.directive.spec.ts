import { DebugLogDirective } from './debuglog.directive';

describe('DebugLogDirective', () => {
  it('should create an instance', () => {
    const directive = new DebugLogDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
