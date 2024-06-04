import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { ProductAddComponent } from "./components/product-add/product-add.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { LoginComponent } from "./login/login.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    ProductAddComponent,
    LoginComponent,
    ProductListComponent,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
