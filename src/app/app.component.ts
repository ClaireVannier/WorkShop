import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CatalogComponent } from "./catalog/catalog.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CardComponent, CatalogComponent]
})
export class AppComponent {
  title = 'WorkShop';
}
