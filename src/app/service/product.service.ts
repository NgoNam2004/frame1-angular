import { Injectable } from "@angular/core";
import { IProduct } from "../interfaces/Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("http://localhost:3000/products");
  }
  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>("http://localhost:3000/products", product);
  }
  removeProduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
}
