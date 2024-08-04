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
      const pattern = new RegExp(`^${keyword}`, 'i');
      const filtered = this.productsData().filter((product) =>
        pattern.test(product.productName)
      );
      this.filteredProducts.set(filtered);
      return this.filteredProducts;
    } else {
      return this.productsData;
    }
  }

  sortProductsByPrice(sortBy: string) {
    console.log('filtered config inside product service', sortBy);

    if (sortBy === 'price-asc') {
      this.productsData().sort((a, b) => a.productPrice - b.productPrice);
    }
    else if (sortBy === 'price-desc') {
      this.productsData().sort((a, b) => b.productPrice - a.productPrice);
    }
  }

  sortProductsByDate(sortBy: string) {
    if (sortBy === 'date-added-recent') {
      console.log('date');
      this.productsData().sort(
        (a, b) =>
          new Date(b.productDateAdded).getTime() -
          new Date(a.productDateAdded).getTime()
      );
    }
    if (sortBy === 'date-added-old') {
      console.log('date');
      this.productsData().sort(
        (a, b) =>
          new Date(a.productDateAdded).getTime() -
          new Date(b.productDateAdded).getTime()
      );
    }

    return this.productsData;
  }
}
