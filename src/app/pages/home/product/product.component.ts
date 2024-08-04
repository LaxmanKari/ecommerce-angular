import {
  Component,
  inject,
  WritableSignal,
  signal,
  Input,
  DoCheck,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { product } from '../../../core/models/app.models';
import { ProductService } from '../../../core/services/product.service';
import { UserService } from '../../../core/services/user.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgFor, DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductsComponent implements DoCheck {
  @Input({ required: true }) filterByKeyword!: WritableSignal<string>;
  productsService = inject(ProductService);
  userService = inject(UserService);
  wishListed = signal(false);

  private keyword: string | null = null;

  ngDoCheck() {
    const newKeyword = this.filterByKeyword();
    if (newKeyword !== this.keyword) {
      this.keyword = newKeyword;
      console.log('fetch now');
      this.productsList = this.productsService.getProducts(
        this.filterByKeyword()
      );
      console.log(this.productsList());
    }
  }

  productsList: WritableSignal<product[]>;

  constructor() {
    this.productsList = this.productsService.getProducts('');
  }

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
