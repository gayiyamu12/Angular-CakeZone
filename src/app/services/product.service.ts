import { Injectable } from '@angular/core';
import { products } from '../mocks/products';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsdetails: Product[] = products;

  constructor() {}

  getProducts(): Product[] {
    return this.productsdetails;
  }
}
