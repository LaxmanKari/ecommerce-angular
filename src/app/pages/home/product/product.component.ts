import { Component, inject, WritableSignal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';
import { product, type user } from '../../../core/models/app.models';
import { ProductService } from '../../../core/services/product.service';
import { UserService } from '../../../core/services/user.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductsComponent {
  productsService = inject(ProductService);
  userService = inject(UserService);
  wishListed = signal(false);

  // usersList: WritableSignal<user[]> = this.userService.getUsers();
  productsList: WritableSignal<product[]> = this.productsService.getProducts();

  onWishList(itemId: string) {
    this.wishListed.set(true);
    const extractedUser = localStorage.getItem('loggedInUser');
    if (extractedUser) {
      const user = JSON.parse(extractedUser);
      this.userService.updateWishList(user.userEmail, itemId);
    }
  }

  onAddToCart(itemId: string) {
    this.wishListed.set(true);
    const extractedUser = localStorage.getItem('loggedInUser');
    if (extractedUser) {
      const user = JSON.parse(extractedUser);
      this.userService.updateCart(user.userEmail, itemId);
    }
  }
}
