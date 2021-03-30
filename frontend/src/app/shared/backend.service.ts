import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from "./data";
import {Cart} from "./cart";
import {UserLogin} from "./userlogin";
import {UserRegister} from "./userregister";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + '/product');
  }

  Cart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.baseUrl + 'cart');
  }

  login(user: UserLogin): Observable<UserRegister> {
    return this.http.post<any>(this.baseUrl + '/user/login', user);
  }

}
