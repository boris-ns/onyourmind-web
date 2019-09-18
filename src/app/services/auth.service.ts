import { API_LOGIN } from './../config/api-paths';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../models/login-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginInfo: LoginInfo): Observable<any> {
    return this.http.post(API_LOGIN, loginInfo);
  }

}
