import { Component, OnInit, Input } from "@angular/core";
import { Product } from "./product.interface";

@Component({
  selector: "app-products",
  template: `
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ product.name }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>{{ product.description }}</p>
    </ion-content>
  `
})
export class ProductsCreatePage implements OnInit {
  product = {
    name: "Bananas",
    description: "Irure eu eu non cillum duis",
    rating: 5,
    photoUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg"
  };

  constructor() {}

  ngOnInit() {}
}
