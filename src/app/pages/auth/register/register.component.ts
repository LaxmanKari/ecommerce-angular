import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { type registerUser } from '../../../core/models/app.models';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: registerUser = {
    userName: '',
    userEmail: '',
    userPassword: '',
    confirmUserPassword: '',
  };
  isFormSubmitted = false;
  isPasswordMatches = signal(true);
  throwError = signal('');

  authService = inject(AuthService);
  router = inject(Router);

  onRegister(form: NgForm) {
    if (this.user.userPassword !== this.user.confirmUserPassword) {
      this.isPasswordMatches.set(false);
      return;
    }
    this.isPasswordMatches.set(true);
    if (form.valid) {
      const resgiteryError = this.authService.registerUser(this.user);
      if (resgiteryError !== '') {
        this.throwError.set(resgiteryError);
      } else {
        this.router.navigate(['/login']);
      }
    }
    this.isFormSubmitted = true;
  }
}
