import { Component, OnInit } from '@angular/core';
import {Product} from "../../../shared/product";


@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  product: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
