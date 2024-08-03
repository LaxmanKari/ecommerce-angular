import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { type loggedInUser } from '../../../core/models/app.models';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: loggedInUser = {
    userEmail: '',
    userPassword: '',
  };
  isFormSubmitted = false;
  errorMessage = signal('');

  authService = inject(AuthService);
  router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      const hasher = this.authService.validateUser(this.user);
      if (hasher === true) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage.set('Please check your Credentials');
      }
    }
    this.isFormSubmitted = true;
  }
}
