import { NgFor } from '@angular/common';
import { Component, inject, WritableSignal } from '@angular/core';
import { product } from '../../../core/models/app.models';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [NgFor],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent {
  productService = inject(ProductService);

  userInventoryProducts: WritableSignal<product[]>;
  constructor() {
    this.userInventoryProducts = this.productService.getUserInventory();
  }

  onDelete(id: string) {
    this.productService.removeProductFromUserInventory(id);
    this.userInventoryProducts = this.productService.getUserInventory();
  }
}
