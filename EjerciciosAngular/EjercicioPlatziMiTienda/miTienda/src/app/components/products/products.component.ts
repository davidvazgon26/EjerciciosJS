import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  totalShoppinCart = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'El Mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 365,
      image: './assets/images/bike.jpg',
    },
    {
      id: '3',
      name: 'El Mejor juguete',
      price: 165,
      image: './assets/images/toy.jpg',
    },
    {
      id: '4',
      name: 'Bicicleta casi nueva',
      price: 765,
      image: './assets/images/bike.jpg',
    },
  ];

  constructor() {}

  onAddToShoppingCart(product: Product) {
    console.log(product);
    this.myShoppingCart.push(product);
    this.totalShoppinCart = this.myShoppingCart.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }
}
