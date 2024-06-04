import { Component } from "@angular/core";
import { IProduct } from "../../interfaces/Product";
import { CommonModule } from "@angular/common";
import { ProductService } from "../../service/product.service";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {
    this.productService
      .getAll()
      .subscribe((products) => (this.products = products));
  }
  removeItem(id: number) {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirm) {
      this.productService.removeProduct(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }
}
