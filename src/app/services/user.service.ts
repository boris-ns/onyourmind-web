import { API_USERS, API_DEACTIVATE_USER, API_ACTIVATE_USER } from './../config/api-paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
  }

  getAllUsers(): Observable<any> {
    return this.http.get(API_USERS);
  }

  deactivateUser(userId: number): Observable<any> {
    return this.http.put(`${API_DEACTIVATE_USER}/${userId}`, {});
  }

  activateUser(userId: number): Observable<any> {
    return this.http.put(`${API_ACTIVATE_USER}/${userId}`, {});
  }
}
