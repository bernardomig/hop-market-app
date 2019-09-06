import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product.interface";

@Component({
  selector: "app-product-list-item",
  template: `
    <ion-item (click)="onClick()">
      <ion-avatar slot="start">
        <img src="{{ item.coverUrl }}" />
      </ion-avatar>
      <ion-label text-wrap>
        <ion-text>
          {{ item.name }}
        </ion-text>
        <p>{{ item.description }}</p>
      </ion-label>
    </ion-item>
  `
})
export class ProductListItemComponent implements OnInit {
  @Input() item: Product;
  @Input() key: number;
  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    const { key } = this;

    this.click.emit(key);
  }
}
