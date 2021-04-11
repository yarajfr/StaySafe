import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shared/product";
import {MessengerService} from "../../../service/messenger.service";
import {BackendService} from "../../../shared/backend.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private msg: MessengerService, private cs : BackendService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    // this.cs.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMessage(this.productItem)
    // })
  }



  trackByData(index: number, data: Product): number {
    return data.id;
  }

}
