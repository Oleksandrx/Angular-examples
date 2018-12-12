// head 12, 13 - Data Binding

import { Component } from "@angular/core";

import { Model } from "../../repository.model";

@Component({
  selector: "app-interpolation-binding",
  templateUrl: "./interpolation-binding.component.html"
})

export class InterpolationBindingComponent {
    model: Model = new Model();

    getProductPrice(index: number): number {
      return Math.floor(this.model.getProduct(index).price);
    }
}

