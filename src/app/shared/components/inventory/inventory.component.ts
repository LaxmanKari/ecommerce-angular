import { NgFor } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { product } from '../../../core/models/app.models';
import { ProductService } from '../../../core/services/product.service';
import { EditProductComponent } from "../../../pages/edit-product/edit-product.component";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [NgFor, EditProductComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent {
  id = signal('');
  enableEditingDialog = signal(false);
  productService = inject(ProductService);

  userInventoryProducts: WritableSignal<product[]>;
  constructor() {
    this.userInventoryProducts = this.productService.getUserInventory();
  }

  onDelete(id: string) {
    this.productService.removeProductFromUserInventory(id);
    this.userInventoryProducts = this.productService.getUserInventory();
  }

  onEdit(id: string){
    this.id.set(id);
    this.enableEditingDialog.set(true);
  }

  proceedtoClose(){
    this.enableEditingDialog.set(false); 
  }

  onProductUpdated(){
    this.userInventoryProducts = this.productService.getUserInventory();
  }
}
