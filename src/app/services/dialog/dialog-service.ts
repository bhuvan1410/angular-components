


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogContainer: HTMLElement;

  constructor() {
    this.dialogContainer = document.createElement('div');
    this.dialogContainer.classList.add('dialog-container');
    document.body.appendChild(this.dialogContainer);
  }

  openDialog(content: string): void {
    const dialogElement = document.createElement('div');
    dialogElement.classList.add('dialog');
    dialogElement.innerHTML = content;

    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Close';
    closeBtn.addEventListener('click', () => this.closeDialog(dialogElement));

    dialogElement.appendChild(closeBtn);
    this.dialogContainer.appendChild(dialogElement);
  }

  private closeDialog(dialogElement: HTMLElement): void {
    this.dialogContainer.removeChild(dialogElement);
  }
}


