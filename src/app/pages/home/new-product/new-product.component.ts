import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { UserService } from '../../../core/services/user.service';
@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
})
export class NewProductComponent {
  newProduct = {
    productId: '',
    productName: '',
    productOwner: "",
    productDescription: '',
    productPrice: 0,
    productImage: '',
    productCondition: '',
    productCategory: '',
    productDateAdded: '',
  };

  router = inject(Router);
  productService = inject(ProductService);
  userService = inject(UserService);

  constructor() {
    const localUser = localStorage.getItem('loggedInUser');
    if (localUser) {
      this.newProduct.productOwner = localUser;
    }
    // generate random id
    const id = Math.floor(Math.random() * 9000) + 1000;
    this.newProduct.productId = id + '';
    const now = new Date();
    this.newProduct.productDateAdded = now.toISOString();
  }

  submit() {
    this.productService.addProduct(this.newProduct);
    this.userService.updateUserProducts(
      this.newProduct.productOwner,
      this.newProduct.productId
    );
    this.router.navigate(['/home/dashboard']);
  }
}
