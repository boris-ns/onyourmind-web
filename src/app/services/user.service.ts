import { USER_ID_KEY } from 'src/app/config/local-storage-keys';
import { API_USERS, API_DEACTIVATE_USER, API_ACTIVATE_USER, API_GET_USER } from './../config/api-paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
  }

  public getUserInfo(): Observable<any> {
    const userId = localStorage.getItem(USER_ID_KEY);
    return this.http.get(`${API_GET_USER}/${userId}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(API_USERS);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${API_GET_USER}/${userId}`);
  }

  deactivateUser(userId: number): Observable<any> {
    return this.http.put(`${API_DEACTIVATE_USER}/${userId}`, {});
  }

  activateUser(userId: number): Observable<any> {
    return this.http.put(`${API_ACTIVATE_USER}/${userId}`, {});
  }
}
