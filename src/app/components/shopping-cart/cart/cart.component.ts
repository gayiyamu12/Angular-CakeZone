import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  subscription: Subscription = new Subscription();
  cartItems = [{ name: 'Jelly cake', price: 400 }];
  cartTotal = 0;
  constructor(private msg: MessengerService) {}

  ngOnInit() {
    this.subscription = this.msg.getMsg().subscribe((product: any) => {
      this.addProductToCart(product);
    });

    this.cartItems.forEach((items) => {
      this.cartTotal += items.price;
    });
  }

  addProductToCart(product: any) {
    this.cartItems.push({
      name: product.name,
      price: product.price,
    });

    this.cartTotal = 0;
    this.cartItems.forEach((items) => {
      this.cartTotal += items.price;
    });
  }
}
