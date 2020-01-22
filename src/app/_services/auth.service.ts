import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://warm-bastion-99345.herokuapp.com/api/login';
  constructor(private http: HttpClient) { }

  loginUser(loginUserData) {
    return this.http.post<any>(this.apiUrl, loginUserData);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
