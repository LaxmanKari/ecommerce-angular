import { Injectable } from '@angular/core';
import {
  loggedInUser,
  type user,
  type registerUser,
} from '../models/app.models';
import { usersDatabase } from '../constants/app.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  appUsers: user[] = usersDatabase;

  constructor() {
    const localPersistedUsers = localStorage.getItem('users');

    if (localPersistedUsers) {
      this.appUsers = JSON.parse(localPersistedUsers);
    }
  }

  validateUser(loggedUser: loggedInUser) {
    const extractUser = this.appUsers.find(
      (user) => user.userEmail === loggedUser.userEmail
    );
    if (extractUser) {
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
      };
      this.appUsers = [...this.appUsers, newUser];
      localStorage.setItem('users', JSON.stringify(this.appUsers));
      return '';
    } else {
      return 'User already exists with this email!';
    }
  }
}
