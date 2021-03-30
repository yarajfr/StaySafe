import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from "./data";
import {Cart} from "./cart";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]>{
    return this.http.get<Data[]>(this.baseUrl);
  }

  getCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.baseUrl + 'cart');
  }
}
