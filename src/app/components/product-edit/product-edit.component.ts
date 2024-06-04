import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../service/product.service";
import { IProduct } from "../../interfaces/Product";

@Component({
  selector: "app-edit-product",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"],
})
export class ProductEditComponent {
  productForm = this.formBuilder.group({
    name: [""],
    price: [0],
    imageUrl: [""],
    description: [""],
  });
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      this.productService.getProduct(id).subscribe((product) => {
        this.productForm.patchValue(product);
      });
    });
  }
  onSubmit() {
    const id = this.route.snapshot.params["id"];
    this.productService
      .updateProduct({ id: id, ...this.productForm.value } as IProduct)
      .subscribe((product) => {
        alert("Cập nhật sản phẩm thành công");
        this.router.navigateByUrl("/admin/product");
      });
  }
}
