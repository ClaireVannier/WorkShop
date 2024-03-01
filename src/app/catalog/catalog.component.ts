import { Component } from '@angular/core';
import { Product } from '../models/product.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})

export class CatalogComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      promo: null,
    },
    {
      id: 2,
      name: 'Product 2',
      price: null,
      promo: 20
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      promo: 30
    },
    {
      id: 4,
      name: 'Product 4',
      price: 100,
      promo: 10
    },
    {
      id: 5,
      name: 'Product 5',
      price: null,
      promo: 20
    },
    {
      id: 6,
      name: 'Product 6',
      price: 300,
      promo: null,
    }
  ];
}

// méthode qui permet de recuperer les differents produits
//   getProductWithoutPrice(): Product[] {
//     return this.products.filter(product => product.price === null);
//   }

//   getProductWithPromo(): Product[] { 
// return this.products.filter(product => product.promo !== null);
// }

// getOtherProduct(): Product[] {
//   return this.products.filter(product => product.price !== null && product.promo === null);
// }

// }

