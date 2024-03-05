import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html', 
  styleUrls: ['./search.component.scss'], 
})
export class SearchComponent implements OnInit {
  name: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitSearch() {
    if (this.name.trim() !== '') {
      this.router.navigate(['/wcs', this.name.trim()]);
    }
  }
}
