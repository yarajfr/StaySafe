import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {Data} from "../../shared/data";
import {ActivatedRoute} from '@angular/router';
import {BackendService} from "../../shared/backend.service";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  product: Product[];
  selectedId: number;


  constructor(private cs: BackendService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readProduct();
    } else {
      console.log('id = ' + this.selectedId);
    }
  }

  trackByData(index: number, data: Product): number {
    return data.id;
  }

  readProduct(): void {
    this.cs.getAll().subscribe(
      (response: Data[]) => this.product = response,
      error => console.log(error)
    );
  }
/*
  ngOnInit() {
    this.cs.getProduct().subscribe((products) => {
      this.product = products;
    })
  }

  trackByData(index: number, data: Data): number {
    return data.id;
  }

  readProduct(): void {
    this.cs.getProduct().subscribe(
      (response: Data[]) => this.product = response,
      error => console.log(error)
    );
  }*/

  handleAddToCart() {

  }
}


