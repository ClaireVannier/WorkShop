import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginForm } from '../models/loginform.models';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  
  form: LoginForm = {
  email: '',
  password: '',
  }

  constructor() {}

  formSubmit(form: NgForm) {
    if (form.valid) {
      alert('Login Validé !');
    } else {
      alert("Le formulaire n'est pas valide.");
    }
  }
}
