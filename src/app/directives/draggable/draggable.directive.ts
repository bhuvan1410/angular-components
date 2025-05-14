import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private isDragging = false;
  private startX = 0;
  private startY = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'move');
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX - this.el.nativeElement.offsetLeft;
    this.startY = event.clientY - this.el.nativeElement.offsetTop;
  }

  @HostListener('document:mouseup') onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.renderer.setStyle(this.el.nativeElement, 'left', `${event.clientX - this.startX}px`);
      this.renderer.setStyle(this.el.nativeElement, 'top', `${event.clientY - this.startY}px`);
    }
  }
}
