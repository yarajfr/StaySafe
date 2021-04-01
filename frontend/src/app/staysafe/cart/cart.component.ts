import { Component, OnInit } from '@angular/core';
import { MessengerService} from "../../service/messenger.service";
import {BackendService} from "../../shared/backend.service";
import {Product} from "../../shared/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService, private backendService: BackendService) {
  }

  ngOnInit() {

    this.msg.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }
  addProductToCart(product: Product){

    let productExist = false;

    for (let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].quantity++;
        productExist = true;
        break;
      }
    }

    if(!productExist){
      this.cartItems.push({
        productId: product.id,
        productName: product.artikelbez,
        quantity: 1,
        preis: product.preis
      })
    }


    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.preis)
    })

  }
}

