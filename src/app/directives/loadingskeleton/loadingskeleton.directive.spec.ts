import { LoadingSkeletonDirective } from './loadingskeleton.directive';

describe('LoadingSkeletonDirective', () => {
  it('should create an instance', () => {
    const directive = new LoadingSkeletonDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
