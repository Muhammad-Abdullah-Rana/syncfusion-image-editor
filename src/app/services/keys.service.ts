import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class KeysService {
  constructor(private http: HttpClient) {}

  loadKey(): Observable<{ apiKey: string }> {
    return this.http.get<{ apiKey: string }>('/assets/json/keys.json');
  }
}
