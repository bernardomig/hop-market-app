import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../product.interface";

@Component({
  selector: "app-product-list",
  template: `
    <ion-list>
      <app-product-list-item
        *ngFor="let item of products"
        [item]="item"
      ></app-product-list-item>
    </ion-list>
  `
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit() {}
}
