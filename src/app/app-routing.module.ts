
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InterpolationBindingComponent } from "./01-Data-Binding/01-Interpolation-Binding/interpolation-binding.component";
import { PropertyBindingComponent } from "./01-Data-Binding/02-Property-Binding/property-binding.component";
import { EventBindingComponent } from "./01-Data-Binding/03-Event-Binding/event-binding.component";
import { TwoWayBindingComponent } from "./01-Data-Binding/04-Two-Way-Binding/two-way-binding.component";
import { ClickNgIfComponent } from "./02-Events/01-Click-NgIf/ClickNgIfComponent";
import { AttributeDirectivesComponent } from "./03-Directives/01-Attribute-directives/attribute-directives.component";
import { AttributeDirectivesComponent2 } from "./03-Directives/011-Attribute-directives/attribute-directives.component2";

import { AppTemplateDrivenComponent } from "./04-Forms/01-Template-driven-form/template-driven-form.component";
import { AppReactiveFormComponent } from "./04-Forms/02-Reactive-form/reactive-form.component";
import { AppGitHubComponent } from "./05-HTTP-services/01-GitHub-API/github-api.component";
import { OmdbComponent } from "./05-HTTP-services/02-OMDb-API/omdb-api.component";
import { BuiltinPipesComponent } from './06-Pipes/01. builtin-pipes.component';
import { AsyncPipesComponent } from './06-Pipes/02. async-pipe.component';
import { CustomPipeComponent } from './06-Pipes/03. custompipe.component';

import { StructuralDirectivesComponent } from "./03-Directives/02-Structural-Directives/structural-directives.component";
import { MainComponentService } from "./07-Link-Between-Components/01-Service/main.component.service";
import { MainComponentInputOutput } from "./07-Link-Between-Components/02-Input-Output/main.component.input.output";
import { MainSideBarComponent } from "./07-Link-Between-Components/03-side-bar-toggle/main.component.side-bar";
import { SideBarToggleServiceMain } from "./07-Link-Between-Components/04-side-bar-toggle-service/side-bar-toggle.main";

import { CreateComponent } from "./08-Observable/01-create.component";
import { DisposalComponent } from "./08-Observable/02-disposal.component";
import { PromiseObservableComponent } from './08-Observable/03-promise.observable.component';
import { EventObservableComponent } from './08-Observable/04-event.observable.component';
import { ColdHotObservableComponent } from './08-Observable/05-cold.hotobservable.component';
import { SubjectComponent } from './08-Observable/06-subject.component';
import { HttpSample } from './08-Observable/07-http.sample';
import { MainObservableService } from './08-Observable/08-observable-service-main';



const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "sample1" },
    { path: "sample1", component: InterpolationBindingComponent },
    { path: "sample2", component: PropertyBindingComponent },
    { path: "sample3", component: EventBindingComponent },
    { path: "sample4", component: TwoWayBindingComponent },
    { path: "sample5", component: ClickNgIfComponent },
    { path: "sample7", component: AttributeDirectivesComponent },
    { path: "sample13", component: AttributeDirectivesComponent2 },
    { path: "sample8", component: StructuralDirectivesComponent },
    { path: "sample9", component: AppTemplateDrivenComponent },
    { path: "sample10", component: AppReactiveFormComponent },
    { path: "sample11", component: AppGitHubComponent },
    { path: "sample12", component: OmdbComponent },
    { path: "sample14", component: BuiltinPipesComponent },
    { path: "sample15", component: AsyncPipesComponent },
    { path: "sample16", component: CustomPipeComponent },
    { path: "sample17", component: MainComponentService },
    { path: "sample18", component: MainComponentInputOutput },
    { path: "sample19", component: MainSideBarComponent },
    { path: "sample20", component: SideBarToggleServiceMain },
    { path: "sample21", component: CreateComponent },
    { path: "sample22", component: DisposalComponent },
    { path: "sample23", component: PromiseObservableComponent },
    { path: "sample24", component: EventObservableComponent },
    { path: "sample25", component: ColdHotObservableComponent },
    { path: "sample26", component: SubjectComponent },
    { path: "sample27", component: HttpSample },
    { path: "sample28", component: MainObservableService }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
