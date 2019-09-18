import { API_LOGIN, API_REGISTER_USER } from './../config/api-paths';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../models/login-info';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginInfo: LoginInfo): Observable<any> {
    return this.http.post(API_LOGIN, loginInfo);
  }

  registerUser(userInfo: User): Observable<any> {
    return this.http.post(API_REGISTER_USER, userInfo);
  }
}
