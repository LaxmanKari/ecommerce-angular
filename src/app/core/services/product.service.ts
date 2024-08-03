import { Injectable, signal, WritableSignal } from '@angular/core';
import { products } from '../constants/app.constants';
import { product } from '../models/app.models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  productsData: WritableSignal<product[]> = signal(products);

  constructor() {
    const localPersistedProducts = localStorage.getItem('products');

    if (localPersistedProducts) {
      this.productsData = JSON.parse(localPersistedProducts);
    }
  }

  getProducts(): WritableSignal<product[]> {
    return this.productsData;
  }
}
