import { API_USERS } from './../config/api-paths';
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
}
