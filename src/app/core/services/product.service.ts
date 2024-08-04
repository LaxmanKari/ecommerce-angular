import { Injectable, signal, WritableSignal } from '@angular/core';
import { products } from '../constants/app.constants';
import { product } from '../models/app.models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  productsData: WritableSignal<product[]> = signal(products);
  filteredProducts: WritableSignal<product[]> = signal([]);
  constructor() {
    const localPersistedProducts = localStorage.getItem('products');

    if (localPersistedProducts) {
      this.productsData = JSON.parse(localPersistedProducts);
    }
  }

  getProducts(keyword?: string): WritableSignal<product[]> {
    if (keyword) {
      console.log('keyword : ', keyword);
      const pattern = new RegExp(`^${keyword}`, 'i');
      const filtered = this.productsData().filter((product) =>
        pattern.test(product.productName)
      );
      console.log('filtered inside service : ', filtered);
      this.filteredProducts.set(filtered);
      return this.filteredProducts;
    } else {
      console.log('product service', keyword);
      return this.productsData;
    }
  }
}
