import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Payload } from './models/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  private endpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Payload> {
    return this.http.get<Payload>('/bars')
  }

}
