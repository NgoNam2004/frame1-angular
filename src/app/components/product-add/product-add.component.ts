import { Component, EventEmitter, Output } from "@angular/core";
import { IProduct } from "../../interfaces/Product";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductService } from "../../service/product.service";

@Component({
  selector: "app-product-add",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./product-add.component.html",
  styleUrl: "./product-add.component.css",
})
export class ProductAddComponent {
  @Output() onAdd = new EventEmitter<IProduct>();
  product: IProduct = {
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
  };
  constructor(private productService: ProductService) {}
  onSubmit() {
    this.productService.addProduct(this.product);
    this.product = {
      id: 0,
      name: "",
      price: 0,
      description: "",
      imageUrl: "",
    };
  }
}
