import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { SearchComponent } from "./search/search.component";
import { StudentDetailComponent } from './student-details/student-details.component';
import { MenuComponent } from "./menu/menu.component";
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CardComponent, CatalogComponent, SearchComponent, StudentDetailComponent, SignUpFormComponent, MenuComponent]
})
export class AppComponent {
  title = 'WorkShop';
}
