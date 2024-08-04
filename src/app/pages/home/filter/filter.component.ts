import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type filter } from '../../../core/models/app.models';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() searchKeyword = new EventEmitter<string>();
  @Output() filterObject = new EventEmitter<filter>();

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchKeyword.emit(inputElement.value);
  }

  filters: filter = {
    sortBy: '',
    category: '',
    priceRange: '',
  };

  onPriceRangeChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.filters.priceRange = inputElement.value;
  }

  onFilterButton() {
    this.filterObject.emit(this.filters);
  }
}
