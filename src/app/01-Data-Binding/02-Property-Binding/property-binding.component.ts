import { Component } from "@angular/core";

import { Model } from "../../repository.model";

// head 12, 13 - Data Binding

@Component({
  selector: "app-property-binding",
  templateUrl: "./property-binding.component.html"
})

export class PropertyBindingComponent {
    model: Model = new Model();

    getClasses(): string {
        return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    }
}
