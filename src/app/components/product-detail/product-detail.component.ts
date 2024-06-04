import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IProduct } from "../../interfaces/Product";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="product">
    {{ product.name }}
  </div>`,
  styleUrl: "./product-detail.component.css",
})
export class ProductDetailComponent {
  @Input() product!: IProduct;
}
