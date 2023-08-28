import { Component, OnInit } from '@angular/core';

import {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from '../../models/product.model';
import { switchMap, zip } from 'rxjs';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: '',
  };
  limit = 10;
  offset = 0;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    // this.productsService.getAllProducts().subscribe((data) => {
    this.productsService.getProductsByPage(10, 0).subscribe((data) => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    this.toggleProductDetail();
    // console.log(id);
    this.productsService.getProduct(id).subscribe(
      (data) => {
        console.log('product: ', data);
        this.productChosen = data;
        this.statusDetail = 'success';
      },
      (errorMsg) => {
        window.alert(errorMsg);
        this.statusDetail = 'error';
      }
    );
  }

  // Se recomienda si quieres reutilizar toda esta logica ponerla mejor como servicio en lugar de hacerlo en el componente
  readAndUpdate(id: string) {
    // solicitando producto y actualizando en el mismo metodo sin caer en el callback hell
    this.productsService
      .getProduct(id)
      .pipe(
        // regularmente cuando depende una peticion de orientation, en este caso obtener el id del producto
        switchMap((product) =>
          this.productsService.update(product.id, { title: 'change' })
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
    // zip en lugar de l Promise.all
    // regularmente se usa cuando requieres correr en parallelo las peticiones
    zip(
      this.productsService.getProduct(id),
      this.productsService.update(id, { title: 'nuevo' })
    ).subscribe((response) => {
      const read = response[0];
      const update = response[1];
    });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo Producto',
      description: 'bla bal',
      images: [''],
      price: 1000,
      categoryid: 2,
    };
    this.productsService.create(product).subscribe((data) => {
      console.log('Created: ', data);
      this.products.unshift(data);
    });
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'change title',
    };
    const id = this.productChosen.id;
    this.productsService.update(id, changes).subscribe((data) => {
      console.log('update:', data);
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.products[productIndex] = data;
    });
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id).subscribe(() => {
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  loadMore() {
    this.productsService
      .getProductsByPage(this.limit, this.offset)
      .subscribe((data) => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      });
  }
}
