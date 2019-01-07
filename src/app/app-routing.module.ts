
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InterpolationBindingComponent } from "./01-Data-Binding/01-Interpolation-Binding/interpolation-binding.component";
import { PropertyBindingComponent } from "./01-Data-Binding/02-Property-Binding/property-binding.component";
import { EventBindingComponent } from "./01-Data-Binding/03-Event-Binding/event-binding.component";
import { TwoWayBindingComponent } from "./01-Data-Binding/04-Two-Way-Binding/two-way-binding.component";
import { FormDataValidationComponent } from "./01-Data-Binding/05-form-data-validation/form-data-validation.component";
import { ClickNgIfComponent } from "./02-Events/01-Click-NgIf/ClickNgIfComponent";
import { AppGitHubComponent } from "./03-HTTP-services/01-GitHub-API/github-api.component";
import { OmdbComponent } from "./03-HTTP-services/02-OMDb-API/omdb-api.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "sample1" },
    { path: "sample1", component: InterpolationBindingComponent },
    { path: "sample2", component: PropertyBindingComponent },
    { path: "sample3", component: EventBindingComponent },
    { path: "sample4", component: TwoWayBindingComponent },
    { path: "sample5", component: FormDataValidationComponent },
    { path: "sample6", component: FormDataValidationComponent },
    { path: "sample7", component: ClickNgIfComponent },
    { path: "sample9", component: AppGitHubComponent },
    { path: "sample10", component: OmdbComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
