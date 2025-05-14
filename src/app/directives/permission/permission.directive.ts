import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {
  @Input('appPermission') requiredRole!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const currentUserRole = 'user'; // Replace with actual role from auth service
    if (this.requiredRole !== currentUserRole) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
