import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../shared/backend.service';
import { Data } from '../../shared/data';
import {Orders} from "../../shared/orders";
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  orders: Orders[];
  order: Orders;
  selectedId: number;


  constructor(private cs: BackendService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
    this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
      this.readOne(this.selectedId);
    }
  }

  trackByData(index: number, orders: Orders): number { return orders.id; }


  readAll(): void {
    this.cs.getAllOrders().subscribe(
      (response: Orders[]) => {
        console.log(response);
        return this.orders = response;  },
      error => console.log(error)
    );
  }

  private readOne(id: number): void {
    this.cs.getFindById(id).subscribe(
      (response: Orders) => this.order = response,
      error => console.log(error)
    );
  }
}
