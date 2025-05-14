import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-documentation',
  templateUrl: './directive-documentation.component.html',
  styleUrls: ['./directive-documentation.component.scss']
})
export class DirectiveDocumentationComponent {
 onDebouncedClick() {
    console.log('Debounced Click Triggered');
  }

  onDelete() {
    console.log('Delete action triggered');
  }

  onOutsideClick() {
    console.log('Click detected outside the box');
  }
}
