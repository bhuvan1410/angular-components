import { DraggableDirective } from './draggable.directive';

describe('DraggableDirective', () => {
  it('should create an instance', () => {
    const directive = new DraggableDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });
});
