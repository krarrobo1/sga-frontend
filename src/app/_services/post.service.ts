import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../_models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://warm-bastion-99345.herokuapp.com/api/post';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any>(this.apiUrl);
  }

  getPost(id) {
    return this.http.get<any>(this.apiUrl + `/${id}`);
  }

  createPost(postData) {
    return this.http.post<any>(this.apiUrl, postData);
  }

  updatePost(postid, postData) {
    return this.http.put<any>(this.apiUrl + `/${postid}`, postData);
  }

  deletePost(id) {
    return this.http.delete(this.apiUrl + `/${id}`);
  }
}
