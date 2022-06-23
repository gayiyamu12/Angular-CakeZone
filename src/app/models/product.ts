export class Product {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  discountedPrice?: number;

  constructor(
    name: string,
    imageUrl: string,
    description: string,
    price: number,
    discountedPrice: number
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.discountedPrice = discountedPrice;
  }
}
