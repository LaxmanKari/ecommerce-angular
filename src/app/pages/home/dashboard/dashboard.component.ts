import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { ProductsComponent } from '../product/product.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FilterComponent, ProductsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
   
  filterBykeyword(value: string){
    console.log(value)
  }
}
