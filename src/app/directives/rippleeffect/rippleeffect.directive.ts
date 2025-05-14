import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRippleEffect]'
})
export class RippleEffectDirective {
  constructor(private el: ElementRef) {
    const style = this.el.nativeElement.style;
    style.position = 'relative';
    style.overflow = 'hidden';
  }

  @HostListener('click', ['$event'])
  createRipple(event: MouseEvent) {
    const button = this.el.nativeElement;
    const ripple = document.createElement('span');

    const rect = button.getBoundingClientRect();
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(0, 0, 0, 0.3)';
    ripple.style.pointerEvents = 'none';
    ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
    ripple.style.left = `${event.clientX - rect.left - rect.width / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - rect.height / 2}px`;
    ripple.style.transform = 'scale(0)';
    ripple.style.transition = 'transform 0.5s, opacity 0.5s';
    
    button.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(2)';
      ripple.style.opacity = '0';
    });

    setTimeout(() => ripple.remove(), 500);
  }
}
