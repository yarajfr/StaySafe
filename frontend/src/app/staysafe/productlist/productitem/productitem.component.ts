import { Component, OnInit } from '@angular/core';
import {Product} from "../../../shared/product";
import {ActivatedRoute, Router} from "@angular/router";
import {Data} from "../../../shared/data";
import {BackendService} from "../../../shared/backend.service";

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  product: Data[];
  selectedId: number;

  constructor(private cs: BackendService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
    }
  }

  trackByData(index: number, data: Data): number { return data.id; }

  readAll(): void {
    this.cs.getProduct().subscribe(
      (response: Data[]) => this.product = response,
      error => console.log(error)
    );
  }
}


