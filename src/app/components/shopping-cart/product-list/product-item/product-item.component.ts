import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  index: number = 0;
  @Input()
  productItem!: Product;
  isActive: boolean = false;
  constructor(private msg: MessengerService) {}

  ngOnInit(): void {}
  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }
  onClick() {
    this.isActive = !this.isActive;
  }
}
