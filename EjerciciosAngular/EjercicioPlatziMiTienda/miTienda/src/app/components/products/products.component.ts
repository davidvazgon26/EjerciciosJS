import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
//Servicios
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  totalShoppinCart = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2023, 1, 12);

  /*
  products = [
    {
        id: '1',
        title: 'El Mejor juguete',
        price: 565,
        image: './assets/images/toy.jpg',
        description: '',
        category: '',
      },
      {
        id: '2',
        title: 'Bicicleta casi nueva',
        price: 365,
        image: './assets/images/bike.jpg',
        description: '',
        category: '',
      },
      {
        id: '3',
        title: 'El Mejor juguete',
        price: 165,
        image: './assets/images/toy.jpg',
        description: '',
        category: '',
      },
      {
        id: '4',
        title: 'Bicicleta casi nueva',
        price: 765,
        image: './assets/images/bike.jpg',
        description: '',
        category: '',
      },
  ]
  */

  constructor(
    private storeService: StoreService, //Se inyecto el servicio
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.totalShoppinCart = this.storeService.getTotal();
  }
}
