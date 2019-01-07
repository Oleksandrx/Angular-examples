import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppTemplateDrivenComponent } from "./01-Template-driven-form/template-driven-form.component";
import { AppReactiveFormComponent } from "./02-Reactive-form/reactive-form.component";

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
      AppTemplateDrivenComponent,
      AppReactiveFormComponent
    ]
  })

export class MyFormsModule {
}
