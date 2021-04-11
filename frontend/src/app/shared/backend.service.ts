import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserLogin} from "./userlogin";
import {UserRegister} from "./userregister";
import { Cart } from "./cart";
import { Product } from './product';
import {Orders} from "../service/data.service";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + '/product');
  }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl + '/cart')
  }

  login(user: UserLogin): Observable<UserRegister> {
    return this.http.post<any>(this.baseUrl + '/user/login', user);
  }

  getAllOrders(): Observable<Orders[]>{
    return this.http.get<Orders[]>(this.baseUrl + '/orders');
  }

  getDataById(dataId: number): Observable<Orders> {
    return this.http.get<Orders>(this.baseUrl + '/' + dataId);
  }

  updateById(dataId: number, data: Orders): void {
    this.http.put<Orders>(this.baseUrl + '/' + dataId, data)
      .subscribe(
        response => {
          console.log(response);
          console.log(response.id);
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteOne(dataId: number): void {
    this.http.delete<Orders>(this.baseUrl + '/' + dataId)
      .subscribe(
        response => {
          console.log(response);
          console.log(response.id);
        },
        error => {
          console.log(error);
        }
      );
  }

  create(data: Orders): void {
    this.http.post<Orders>(this.baseUrl, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
