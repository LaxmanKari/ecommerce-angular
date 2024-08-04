import { Component, signal } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { ProductsComponent } from '../product/product.component';
import { filter } from '../../../core/models/app.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FilterComponent, ProductsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  filterBySearchKeyword = signal('');
  filterBySort = signal('');
  filterByCategory = signal('');
  filterByPriceRange = signal('');


  filterBykeyword(value: string) {
    this.filterBySearchKeyword.set(value);
  }

  filters(value: filter) {
    this.filterBySort.set(value.sortBy);
    this.filterByCategory.set(value.category);
    this.filterByPriceRange.set(value.priceRange);
  }
}
