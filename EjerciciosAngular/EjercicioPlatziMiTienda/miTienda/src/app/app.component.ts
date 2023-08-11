import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  // http://www.w3schools.com/howto/img_avatar.png
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
  ];

  onLoaded(img: String) {
    console.log('Recibiendo en el padre la confirmacion del loaded', img);
  }
}
