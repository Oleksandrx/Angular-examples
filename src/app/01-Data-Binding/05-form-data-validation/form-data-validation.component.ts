import { Component } from "@angular/core";

import { Model } from "../../repository.model";
import { Product } from "../../product.model";

// head 12 - Data Binding

@Component({
  selector: "app-form-data-validation",
  templateUrl: "./form-data-validation.component.html",
  styleUrls: ["form-data-validation.component.css"]
})

export class FormDataValidationComponent {
    model: Model = new Model();
    selectedProduct: string;

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }

    newProduct: Product = new Product();

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
    }
}
