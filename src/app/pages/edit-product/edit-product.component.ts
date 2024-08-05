import { Component, EventEmitter, inject, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { FormsModule } from '@angular/forms';
import { product } from '../../core/models/app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  @Input({required: true}) id!: string; 
  // closeDialog
  @Input() dialogState!: WritableSignal<boolean>; 
  @Output() productUpdated = new EventEmitter<void>();

  router = inject(Router);

  productsService = inject(ProductService);
  product = {
    productId: '',
    productName: '',
    productOwner: '',
    productDescription: '',
    productPrice: 0,
    productCategory: '',
    productCondition: '',
    productDateAdded: '',
  }
  editProductData = signal<product>(this.product);

  ngOnInit(): void {
    const item = this.productsService.getProductById(this.id);
    if(item){
      const product = {
        productId: item.productId,
        productName: item.productName,
        productOwner: item.productOwner,
        productDescription: item.productDescription,
        productPrice: item.productPrice,
        productCategory: item.productCategory,
        productCondition: item.productCondition,
        productDateAdded: item.productDateAdded,
      }
      this.editProductData.set(product);
    }
  }

  onSave(){
    this.productsService.updateProduct(this.editProductData(), this.editProductData().productId);
    this.dialogState.set(false);
    this.productUpdated.emit();
  }
}
