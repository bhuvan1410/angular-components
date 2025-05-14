import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {
  @Output() filesDropped = new EventEmitter<FileList>();

  constructor(private el: ElementRef) {}

  @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.el.nativeElement.classList.add('dropzone-hover');
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.el.nativeElement.classList.remove('dropzone-hover');
  }

  @HostListener('drop', ['$event']) onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.el.nativeElement.classList.remove('dropzone-hover');
    if (evt.dataTransfer?.files) {
      this.filesDropped.emit(evt.dataTransfer.files);
    }
  }
}
