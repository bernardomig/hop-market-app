import { Component, OnInit, Input } from "@angular/core";
import { Product } from "./product.interface";

@Component({
  selector: "app-products",
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Products</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-searchbar (ionInput)="filter($event)"></ion-searchbar>
      <app-product-list [products]="items"></app-product-list>
    </ion-content>
  `
})
export class ProductsPage implements OnInit {
  items: Product[];

  PRODUCTS: Product[] = [
    {
      name: "Bananas",
      description: "Irure eu eu non cillum duis",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg"
    },
    {
      name: "Oranges",
      description: "Qui ad fugiat elit sunt et duis pariatur est Lorem minim.",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg"
    },
    {
      name: "Apples",
      description: "Aliquip veniam tempor exercitation labore qui ut aute.",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg"
    },
    {
      name: "Tomato",
      description: "Id labore voluptate Lorem excepteur amet.",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg"
    },
    {
      name: "Tomato",
      description: "Enim pariatur aliqua mollit ut ut officia.",
      coverUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg"
    }
  ];

  constructor() {
    this.items = this.PRODUCTS;
  }

  filter(event) {
    const value = event.target.value.toLowerCase();

    this.items = this.PRODUCTS.filter(
      ({ name }) => name.toLowerCase().indexOf(value) > -1
    );
  }

  ngOnInit() {}
}
