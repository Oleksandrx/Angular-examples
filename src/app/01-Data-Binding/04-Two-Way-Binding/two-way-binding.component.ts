import { Component } from "@angular/core";

import { Model } from "../../repository.model";
import { Product } from "../../product.model";

// head 12 - Data Binding

@Component({
  selector: "app-two-way-binding",
  templateUrl: "./two-way-binding.component.html"
})

export class TwoWayBindingComponent {
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
}
