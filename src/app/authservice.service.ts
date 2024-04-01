// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './response';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private loginUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  login(loginRequest: Request): Observable<Response> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Response>(this.loginUrl, loginRequest, { headers });
  }
}
