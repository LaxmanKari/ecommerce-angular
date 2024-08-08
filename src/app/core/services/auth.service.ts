import { Injectable, signal } from '@angular/core';
import {
  loggedInUser,
  type user,
  type registerUser,
} from '../models/app.models';
import { usersDatabase } from '../constants/app.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  appUsers: user[] = usersDatabase;
  isAuthenticated = signal(false);

  constructor() {
    const localPersistedUsers = localStorage.getItem('users');
    const userLoggedIn = localStorage.getItem('loggedInUser');
    if (localPersistedUsers) {
      this.appUsers = JSON.parse(localPersistedUsers);
    }
    if (userLoggedIn) {
      this.isAuthenticated.set(true);
    }
    
  }

  validateUser(loggedUser: loggedInUser) {
    const extractUser = this.appUsers.find(
      (user) => user.userEmail === loggedUser.userEmail
    );
    if (extractUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(extractUser));
      this.isAuthenticated.set(true);
      return extractUser.userPasswordHash === loggedUser.userPassword;
    }
    return false;
  }

  registerUser(loggedUser: registerUser): string {
    const extractUser = this.appUsers.find(
      (user) => user.userEmail === loggedUser.userEmail
    );
    if (!extractUser) {
      // add to db
      const newUser: user = {
        userName: loggedUser.userName,
        userEmail: loggedUser.userEmail,
        userPasswordHash: loggedUser.userPassword,
        role: 'user',
        userProducts: [],
        userCart: [],
        userPurchases: [],
        userProductWishList: [],
      };
      this.appUsers = [...this.appUsers, newUser];
      localStorage.setItem('users', JSON.stringify(this.appUsers));
      return '';
    } else {
      return 'User already exists with this email!';
    }
  }
}
