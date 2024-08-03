import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { products } from '../../../core/constants/app.constants';
import { CommonModule, NgFor } from '@angular/common';
import { type product } from '../../../core/models/app.models';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductsComponent {
  productsList: product[] = products; 

}
