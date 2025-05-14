import { PermissionDirective } from './permission.directive';

describe('PermissionDirective', () => {
  it('should create an instance', () => {
    const directive = new PermissionDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
