import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'David';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  obj = {
    lastName: 'Vazquez',
    Job: 'Developer',
    Hobbie: 'Futbol',
  };

  btnDisable = true;
  names: string[] = ['David', 'Alejandro', 'Daniel'];
  newName = '';
  newName2 = '';

  products: IProduct[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://picsum.photos/200/200?random=1',
      category: 'Jugetes',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/200/200?random=2',
    },
    {
      name: 'Collection Tree',
      price: 34,
      image: 'https://picsum.photos/200/200?random=3',
    },
    {
      name: 'Mis Libros',
      price: 23,
      image: 'https://picsum.photos/200/200?random=4',
    },
  ];

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  Incrementar() {
    this.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
