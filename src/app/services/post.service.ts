import { API_ALL_POSTS, API_DEACTIVATE_POST, API_ACTIVATE_POST, API_POSTS } from './../config/api-paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { 
  }

  getPost(postId: number): Observable<any> {
    return this.http.get(`${API_ALL_POSTS}/${postId}`);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(API_ALL_POSTS);
  }

  deactivatePost(postId): Observable<any> {
    return this.http.put(`${API_DEACTIVATE_POST}/${postId}`, {});
  }

  activatePost(postId): Observable<any> {
    return this.http.put(`${API_ACTIVATE_POST}/${postId}`, {});
  }
  
  addPost(postText: string): Observable<any> {
    const payload = {
      text: postText
    };

    return this.http.post(API_POSTS, payload);
  }
}
