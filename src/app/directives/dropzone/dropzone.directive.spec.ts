import { DropzoneDirective } from './dropzone.directive';

describe('DropzoneDirective', () => {
  it('should create an instance', () => {
    const directive = new DropzoneDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
