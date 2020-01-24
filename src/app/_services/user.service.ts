import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://warm-bastion-99345.herokuapp.com/api/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.apiUrl);
  }

  createUser(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }

  deleteUser(userId) {
    return this.http.delete(this.apiUrl + `/${userId}`);
  }

  updateUser(userId, userData) {
    return this.http.put(this.apiUrl + `/${userId}`, userData);
  }

}
