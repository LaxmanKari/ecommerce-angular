import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() searchKeyword = new EventEmitter<string>();

  onInputChange(event: Event){
    const inputElement = event.target as HTMLInputElement; 
    this.searchKeyword.emit(inputElement.value);
  }
}
