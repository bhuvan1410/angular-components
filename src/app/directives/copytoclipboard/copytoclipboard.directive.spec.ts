import { CopyToClipboardDirective } from './copytoclipboard.directive';

describe('CopyToClipboardDirective', () => {
  it('should create an instance', () => {
    const directive = new CopyToClipboardDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
