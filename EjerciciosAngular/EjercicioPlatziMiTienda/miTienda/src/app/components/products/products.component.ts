import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

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

  constructor(
    private storeService: StoreService //Se inyecto el servicio
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.totalShoppinCart = this.storeService.getTotal();
  }
}
