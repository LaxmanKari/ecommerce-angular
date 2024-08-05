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

  addProduct(newProduct: product): void {
    this.productsData.update((products) => {
      return [newProduct, ...products];
    });
    localStorage.setItem('products', JSON.stringify(this.productsData()));
  }

  updateProduct(newProduct: product, id: string){
    const currentProducts = this.productsData(); 
    const updatedProducts = currentProducts.map(product => 
      product.productId === id ? {...product, ...newProduct} : product
    )
    this.productsData.set(updatedProducts);
    localStorage.setItem('products', JSON.stringify(this.productsData()));
  }

  getProductById(id: string){
    const currentProducts = this.productsData();
    return currentProducts.find(product => product.productId === id);
  }

  removeProduct(id: string) {
    this.productsData.set(
      this.productsData().filter((product) => product.productId !== id)
    );
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

  getUserInventory(): WritableSignal<product[]> {
    const loggedInUser = localStorage.getItem('loggedInUser');
    let items: string[] = [];
    let userProducts: product[] = [];
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      items = user.userProducts;
      userProducts = this.productsData().filter((product) =>
        items.includes(product.productId)
      );
      this.filteredProducts.set(userProducts);
    }
    return this.filteredProducts;
  }

  removeProductFromUserInventory(id: string) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    let items: string[] = [];
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      items = user.userProducts;
      items = items.filter((i) => i !== id);
      user.userProducts = items;
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    }
    this.removeProduct(id);
    return this.productsData().filter((product) =>
      items.includes(product.productId)
    );
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
