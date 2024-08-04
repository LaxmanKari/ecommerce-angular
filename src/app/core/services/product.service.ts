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
      const data = JSON.parse(localPersistedProducts);
      this.productsData.set(data);
    } else {
      localStorage.setItem('products', JSON.stringify(this.productsData()));
    }
  }

  addProduct(newProduct: product): void{
     this.productsData.update((products) => {
      return [newProduct, ...products];
    })
    localStorage.setItem('products', JSON.stringify(this.productsData()));
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
    if (sortBy === 'price-asc') {
      this.productsData().sort((a, b) => a.productPrice - b.productPrice);
    } else if (sortBy === 'price-desc') {
      this.productsData().sort((a, b) => b.productPrice - a.productPrice);
    }
  }

  sortProductsByDate(sortBy: string) {
    if (sortBy === 'date-added-recent') {
      this.productsData().sort(
        (a, b) =>
          new Date(b.productDateAdded).getTime() -
          new Date(a.productDateAdded).getTime()
      );
    }
    if (sortBy === 'date-added-old') {
      this.productsData().sort(
        (a, b) =>
          new Date(a.productDateAdded).getTime() -
          new Date(b.productDateAdded).getTime()
      );
    }

    return this.productsData;
  }

  sortProductsByCategory(sortByValue: string): WritableSignal<product[]> {
    if (sortByValue === 'all') {
      return this.productsData;
    }
    this.filteredProducts.set(
      this.productsData().filter(
        (product) =>
          product.productCategory.toLowerCase() === sortByValue.toLowerCase()
      )
    );

    return this.filteredProducts;
  }
}
