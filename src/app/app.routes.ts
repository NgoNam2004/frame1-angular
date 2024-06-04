import { Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { WebsiteComponent } from "./components/layouts/website/website.component";
import { HomeComponent } from "./pages/home/home.component";
import { AdminComponent } from "./components/layouts/admin/admin.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductAddComponent } from "./components/product-add/product-add.component";

export const routes: Routes = [
  {
    path: "",
    component: WebsiteComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "product", component: HomeComponent },
      { path: "product/:id", component: ProductDetailComponent },
    ],
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "/admin/product",
        pathMatch: "full",
      },
      { path: "product", component: ProductListComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: "product/:id/edit", component: ProductEditComponent },
    ],
  },
  { path: "**", component: HomeComponent },
];
