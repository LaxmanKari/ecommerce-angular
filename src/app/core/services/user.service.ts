import { Injectable } from '@angular/core';
import { usersDatabase } from '../constants/app.constants';
import { user } from '../models/app.models';

@Injectable({ providedIn: 'root' })
export class UserService {
  usersData: user[] = usersDatabase;

  constructor() {
    const localPersistedProducts = localStorage.getItem('users');

    if (localPersistedProducts) {
      this.usersData = JSON.parse(localPersistedProducts);
    }
  }

  getUsers() {
    return this.usersData;
  }

  updateLocalUserAppData(userInput: user) {
    localStorage.setItem('loggedInUser', JSON.stringify(userInput));
  }

  updateProductAddedInfoInDB(userIndex: number, productId: string) {
    const users = localStorage.getItem('users');
    if (users) {
      const usersLocalData = JSON.parse(users);
      usersLocalData[userIndex].userProducts.push(productId);
      localStorage.setItem('users', JSON.stringify(usersLocalData));
    }
  }

  updateUserProducts(userInput: string, productId: string) {
    const user: user = JSON.parse(userInput);
    const userIndex = this.usersData.findIndex(
      (u) => u.userEmail === user.userEmail
    );
    this.usersData[userIndex]?.userProducts?.push(productId);
    this.updateLocalUserAppData(this.usersData[userIndex]);
    this.updateProductAddedInfoInDB(userIndex, productId);
  }

  updateWishList(mail: string, productId: string) {
    const userIndex = this.usersData.findIndex((u) => u.userEmail === mail);
    if (this.usersData[userIndex].userProductWishList === undefined) {
      this.usersData[userIndex].userProductWishList = [];
    }
    this.usersData[userIndex].userProductWishList?.push(productId);
    this.updateLocalStorage(this.usersData);
  }

  updateCart(mail: string, productId: string) {
    const userIndex = this.usersData.findIndex((u) => u.userEmail === mail);
    if (this.usersData[userIndex].userCart === undefined) {
      this.usersData[userIndex].userCart = [];
    }
    this.usersData[userIndex].userCart?.push(productId);
    this.updateLocalStorage(this.usersData);
  }

  updateLocalStorage(usersData: user[]) {
    localStorage.setItem('users', JSON.stringify(usersData));
  }
}
