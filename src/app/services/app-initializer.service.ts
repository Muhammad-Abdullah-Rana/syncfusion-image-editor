import { Injectable } from '@angular/core';
import { KeysService } from './keys.service';
import { firstValueFrom } from 'rxjs';
import { registerLicense } from '@syncfusion/ej2-base';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(private keysService: KeysService) {}

  async initialize(): Promise<void> {
    try {
      const data = await firstValueFrom(this.keysService.loadKey());
      registerLicense(data.apiKey); // Register the Syncfusion license
    } catch (error) {
      console.error('Error initializing Syncfusion license:', error);
    }
  }
}