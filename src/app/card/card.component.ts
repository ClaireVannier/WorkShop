import { Component } from '@angular/core';
import { User } from '../models/user.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {

  user: User = { 
    image: "https://via.placeholder.com/150",
    title: "John Doe",
    age: 25,
    citation: ""
  }

  constructor() {}

  sayHello(): void {
    alert("Hello");
  }
 }
