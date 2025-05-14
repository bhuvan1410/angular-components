import { DisableControlDirective } from './disablecontrol.directive';

describe('DisableControlDirective', () => {
  it('should create an instance', () => {
    const mockRenderer = jasmine.createSpyObj('Renderer2', ['setProperty']);
    const directive = new DisableControlDirective({ nativeElement: document.createElement('div') }, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
