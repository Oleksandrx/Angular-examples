import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule} from "@angular/forms";

import { InterpolationBindingComponent } from "./01-Interpolation-Binding/interpolation-binding.component";
import { PropertyBindingComponent } from "./02-Property-Binding/property-binding.component";
import { EventBindingComponent } from "./03-Event-Binding/event-binding.component";
import { TwoWayBindingComponent } from "./04-Two-Way-Binding/two-way-binding.component";
import { FormDataValidationComponent } from "./05-form-data-validation/form-data-validation.component";

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule
    ],
    declarations: [
      InterpolationBindingComponent,
      PropertyBindingComponent,
      EventBindingComponent,
      TwoWayBindingComponent,
      FormDataValidationComponent
    ]
  })

export class DataBindingModule {
}
