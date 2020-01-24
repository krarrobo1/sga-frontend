import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/User';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  apiUrl = 'https://warm-bastion-99345.herokuapp.com/api/login';
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  loginUser(loginUserData) {
    return this.http.post<any>(this.apiUrl, loginUserData);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }



  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
