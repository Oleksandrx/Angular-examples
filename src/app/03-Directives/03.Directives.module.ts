import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AttributeDirectivesComponent } from "./01-Attribute-directives/attribute-directives.component";
import { AttributeDirectivesComponent2 } from "./011-Attribute-directives/attribute-directives.component2";
import { SetAttributeDirective2 } from "./011-Attribute-directives/set-attribute-directives2";
import { SetColorDirective } from "./01-Attribute-directives/set-color.directive";
import { MouseEventDirective } from "./01-Attribute-directives/mouse-event.directive";
import { ColorChangeDirective } from "./01-Attribute-directives/change-color.directive";

import { StructuralDirectivesComponent } from "./02-Structural-Directives/structural-directives.component";
import { BlockRepeatDirective } from "./02-Structural-Directives/repeat.directive";
import { ConfirmDeleteDirective } from "./01-Attribute-directives/confirm.directive";
import { GetCoordsDirective } from "./01-Attribute-directives/get-coords.directive";
import { HostBindingDirective } from "./01-Attribute-directives/host-binding.directive";
import { MyIfDirective } from "./02-Structural-Directives/my-if.directive";
import { MyDelayDirective } from "./02-Structural-Directives/my-delay.directive";
import { SetContextDirective } from "./02-Structural-Directives/set-context.directive";

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
        AttributeDirectivesComponent,
        AttributeDirectivesComponent2,
        SetColorDirective,
        MouseEventDirective,
        ColorChangeDirective,
        StructuralDirectivesComponent,
        BlockRepeatDirective,
        ConfirmDeleteDirective,
        GetCoordsDirective,
        HostBindingDirective,
        MyIfDirective,
        MyDelayDirective,
        SetContextDirective,
        SetAttributeDirective2
    ]
  })

export class AttributeDirectives {
}
