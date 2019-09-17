import { API_LOGIN } from './../config/api-paths';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(loginInfo) {
    return this.http.post(API_LOGIN, loginInfo);
  }

}
