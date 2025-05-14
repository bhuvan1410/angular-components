import { OnlyNumbersDirective } from './onlynumbers.directive';

describe('OnlyNumbersDirective', () => {
  it('should create an instance', () => {
    const directive = new OnlyNumbersDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
