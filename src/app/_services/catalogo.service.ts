import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  serviceUrl = 'https://warm-bastion-99345.herokuapp.com/api/category/';

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get<any>(this.serviceUrl + 'roles');
  }

  getTitulations() {
    return this.http.get<any>('https://warm-bastion-99345.herokuapp.com/api/titulation');
  }

  getKeywords() {
    return this.http.get<any>(this.serviceUrl + 'keywords');
  }

}
