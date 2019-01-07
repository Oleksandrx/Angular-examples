import { Component } from "@angular/core";

import { Model } from "../../repository.model";
import { Product } from "../../product.model";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"]
})

export class AppTemplateDrivenComponent {

    constructor() {}
    
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




