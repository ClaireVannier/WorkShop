import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [ButtonComponent, CommonModule],
})
export class MenuComponent {
 colors: string[] = ['red', 'blue', 'transparent', 'orange']
 }
