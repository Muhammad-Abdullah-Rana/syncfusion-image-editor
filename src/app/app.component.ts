import { ImageEditorModule, ImageEditorComponent, ShapeSettings } from '@syncfusion/ej2-angular-image-editor';
import { Component, ViewChild,ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Observable } from 'rxjs';
import { KeysService } from './services/keys.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageEditorModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('imageEditor') imageEditor!: ImageEditorComponent;
  isImageEditorInitialized = false;
  data: any;

  constructor(private http: HttpClient, private keysService: KeysService) {
  }

  async ngOnInit(){
    this.getJsonData().subscribe((res) => {
      this.data = res;
    });
  }

  public getJsonData(): Observable<any> {
    return this.http.get('/assets/json/data.json');
  }

  onImageEditorCreated(): void {
    this.isImageEditorInitialized = true;
  }

  public saveAnnotations(): void {
    let shape: ShapeSettings[] = this.imageEditor.getShapeSettings();

    const jsonString = JSON.stringify(shape, null, 2);

    const blob = new Blob([jsonString], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.json';

    link.click();

    URL.revokeObjectURL(link.href);
  }

  public drawSavedAnnotations(): void {
    this.imageEditor.drawEllipse(808, 110, 92, 71.5);
  }
}