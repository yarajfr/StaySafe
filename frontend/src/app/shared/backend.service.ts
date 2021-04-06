import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserLogin} from "./userlogin";
import {UserRegister} from "./userregister";
import { Cart } from "./cart";
import { Product } from './product';
import { Orders } from "./orders";

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

  getOrdersById(ordersId: number): Observable<Orders> {
    return this.http.get<Orders>(this.baseUrl + '/' + ordersId);
  }

  updateById(ordersId: number, orders: Orders): void {
    this.http.put<Orders>(this.baseUrl + '/' + ordersId, orders)
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

  deleteOne(orderId: number): void {
    this.http.delete<Orders>(this.baseUrl + '/' + orderId)
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

  create(orders: Orders): void {
    this.http.post<Orders>(this.baseUrl, orders)
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
