import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {Data} from "../../shared/data";
import {ActivatedRoute} from '@angular/router';
import {BackendService} from "../../shared/backend.service";
import {MessengerService} from "../../service/messenger.service";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Product[];


  constructor(private cs: BackendService, private route: ActivatedRoute, private msg: MessengerService) {
  }

  ngOnInit(): void {

       this.loadProduct();
    }


    loadProduct() {
    this.cs.getAll().subscribe((product) => {
      this.productList = product;
  })
}
}

