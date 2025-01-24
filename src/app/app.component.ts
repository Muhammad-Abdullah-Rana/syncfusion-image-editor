import { ImageEditorModule, ImageEditorComponent, ShapeSettings } from '@syncfusion/ej2-angular-image-editor';
import { Component, ViewChild,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('imageEditor') imageEditor!: ImageEditorComponent;
  isImageEditorInitialized = false;

  // This method is triggered when the Image Editor is fully initialized
  onImageEditorCreated(): void {
    this.isImageEditorInitialized = true;
  }

  public manipulateImage(): void {
    let shape: ShapeSettings[] = this.imageEditor.getShapeSettings();
    //console.log(shape);
  }
}