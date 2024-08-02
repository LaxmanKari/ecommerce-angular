import { Injectable } from "@angular/core";
import {loggedInUser, type user} from "../models/app.models";
import { usersDatabase } from "../constants/app.constants";

@Injectable({providedIn: 'root'}) 
export class AuthService {

   appUsers: user[] = usersDatabase; 

   constructor(){
      const localPersistedUsers = localStorage.getItem('users');

      if(localPersistedUsers){
        this.appUsers = JSON.parse(localPersistedUsers); 
      }
   }

   validateUser(loggedUser: loggedInUser){
      const extractUser = this.appUsers.find((user) => user.userEmail === loggedUser.userEmail);
      if(extractUser){
       return extractUser.userPasswordHash === loggedUser.userPassword
      }
      return false;
   }

}