import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]'
})
export class PasswordToggleDirective {
  private visible = false;
  private toggleIcon!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const parent = this.el.nativeElement.parentElement;
    this.toggleIcon = this.renderer.createElement('span');
    this.toggleIcon.innerHTML = '👁️';
    this.renderer.setStyle(this.toggleIcon, 'cursor', 'pointer');
    this.renderer.setStyle(this.toggleIcon, 'marginLeft', '8px');

    this.renderer.listen(this.toggleIcon, 'click', () => this.togglePassword());

    this.renderer.appendChild(parent, this.toggleIcon);
  }

  togglePassword() {
    this.visible = !this.visible;
    this.el.nativeElement.type = this.visible ? 'text' : 'password';
  }
}
