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

  createPost(postData) {
    return this.http.post(this.apiUrl, postData);
  }

  updatePost() {
    //
  }

  deletePost() {
    //
  }
}
