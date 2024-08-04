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
import { productCategories } from '../../../core/constants/app.constants';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgFor, DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductsComponent implements DoCheck {
  @Input({ required: true }) filterByKeyword!: WritableSignal<string>;
  @Input({ required: true }) filterBySort!: WritableSignal<string>;
  @Input({ required: true }) filterByCategory!: WritableSignal<string>;
  @Input({ required: true }) filterByPriceRange!: WritableSignal<string>;

  productsService = inject(ProductService);
  userService = inject(UserService);
  wishListed = signal(false);
  categories = productCategories;

  private searchKeyword: string | null = null;
  private sortByKeyword: string | null = null;
  private categoryKeyword: string | null = null;
  private priceRange: string | null = null;

  ngDoCheck() {
    const newKeyword = this.filterByKeyword();
    if (newKeyword !== this.searchKeyword) {
      this.searchKeyword = newKeyword;
      this.productsList = this.productsService.getProducts(
        this.filterByKeyword()
      );
    }

    const newSortKeyword = this.filterBySort();
    if (this.sortByKeyword !== this.filterBySort()) {
      this.sortByKeyword = newSortKeyword;
      if (
        this.filterBySort() === 'price-asc' ||
        this.filterBySort() === 'price-desc'
      ) {
        this.productsService.sortProductsByPrice(this.filterBySort());
      }
      if (
        this.filterBySort() === 'date-added-recent' ||
        this.filterBySort() === 'date-added-old'
      ) {
        this.productsService.sortProductsByDate(this.filterBySort());
      }
    }
    const newCategoryKeyword = this.filterByCategory();
    console.log('signal value', this.filterByCategory());
    console.log('keyword value', this.categoryKeyword);
    if (this.categoryKeyword !== this.filterByCategory()) {
      console.log('about to call service to filter by category');
      this.categoryKeyword = newCategoryKeyword;
      if (
        this.categories
          .map((item) => item.toLowerCase())
          .includes(this.categoryKeyword.toLowerCase())
      ) {
        this.productsList = this.productsService.sortProductsByCategory(
          this.filterByCategory()
        );
      }
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
