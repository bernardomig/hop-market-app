import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ProductsPage } from "./products.page";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list/product-list-item.component";
import { ProductsCreatePage } from "./products-create.page";

const routes: Routes = [
  {
    path: "",
    component: ProductsPage
  },
  {
    path: "create",
    component: ProductsCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsPage,
    ProductsCreatePage,
    ProductListComponent,
    ProductListItemComponent
  ]
})
export class ProductsPageModule {}
