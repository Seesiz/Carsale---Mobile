import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  caracter: any[] = [];
  constructor() {}
  selectedFiles: File[] = [];

  getThumbnailUrl(file: File): string {
    const objectUrl = URL.createObjectURL(file);
    return objectUrl;
  }

  onFileSelected(event: any) {
    let hadError = false;
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        const currentFile = fileInput.files[i];
        if (currentFile.type.startsWith('image/')) {
          this.selectedFiles.push(currentFile);
        } else {
          hadError = true;
        }
      }

      if (hadError) {
        console.error('Certains fichiers ne sont pas des images.');
      }
    } else {
      this.selectedFiles = [];
    }
  }

  deleteFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.add('drag-over');
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.remove('drag-over');
  }

  onDrop(event: DragEvent) {
    let hadError = false;
    event.preventDefault();
    event.stopPropagation();
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.remove('drag-over');

    const files = event.dataTransfer?.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const currentFile = files[i];
        if (currentFile.type.startsWith('image/')) {
          this.selectedFiles.push(currentFile);
        } else {
          hadError = true;
        }
      }

      if (hadError) {
        console.error('Certains fichiers déposés ne sont pas des images.');
      }
    }
  }
}
