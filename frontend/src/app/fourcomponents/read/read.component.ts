import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../shared/backend.service';
import {Data} from '../../shared/data';
import {ActivatedRoute} from '@angular/router';
import {Product} from "../../shared/product";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  product: Data[];
  selectedId: number;

  constructor(private cs: BackendService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    } else {
      console.log('id = ' + this.selectedId);
    }
  }

  trackByData(index: number, data: Product): number {
    return data.id;
  }

  readAll(): void {
    this.cs.getAll().subscribe(
      (response: Data[]) => this.product = response,
      error => console.log(error)
    );
  }
}

  /*product: Data[];
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
}*/
