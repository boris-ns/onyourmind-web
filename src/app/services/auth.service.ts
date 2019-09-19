import { USER_ROLE_KEY } from './../config/local-storage-keys';
import { USER_ID_KEY } from 'src/app/config/local-storage-keys';
import { API_LOGIN, API_REGISTER_USER } from './../config/api-paths';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../models/login-info';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ROLE_ADMIN } from '../config/user-roles-keys';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem(USER_ID_KEY) != null;
  }

  isAdminLoggedIn(): boolean {
    return localStorage.getItem(USER_ROLE_KEY) === ROLE_ADMIN;
  }

  login(loginInfo: LoginInfo): Observable<any> {
    return this.http.post(API_LOGIN, loginInfo);
  }

  registerUser(userInfo: User): Observable<any> {
    return this.http.post(API_REGISTER_USER, userInfo);
  }
}
