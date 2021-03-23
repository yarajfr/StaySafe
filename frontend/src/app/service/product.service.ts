import { Injectable } from '@angular/core';
import {Product} from "../shared/product";
import {HttpClientModule} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

/*  product: Product[]

  constructor(private http: HttpClientModule) { }

  getAll(): Observable<Product>{
    return this.http.get<Product>(apiUrl);
  }*/
}
