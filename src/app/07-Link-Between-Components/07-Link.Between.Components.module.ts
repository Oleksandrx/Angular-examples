import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MainComponentService } from "./01-Service/main.component.service";
import { ComponentAService } from "./01-Service/componentA.service";
import { ComponentBService } from "./01-Service/componentB.service";
import { CommonService } from "./01-Service/common.service";

import { MainComponentInputOutput } from "./02-Input-Output/main.component.input.output";
import { ComponentAInputOutput } from "./02-Input-Output/componentA.input.output";
import { ComponentBInputOutput } from "./02-Input-Output/componentB.input.output";

import { MainSideBarComponent } from "./03-side-bar-toggle/main.component.side-bar";
import { SideBarComponent } from "./03-side-bar-toggle/side-bar.component";
import { SideBarToggleComponent } from "./03-side-bar-toggle/side-bar-toggle.component";

import { SideBarToggleServiceMain } from "./04-side-bar-toggle-service/side-bar-toggle.main";
import { SideBarServiceComponent } from "./04-side-bar-toggle-service/side-bar-service.component";
import { SideBarToggleServiceComponent } from "./04-side-bar-toggle-service/side-bar-service-toggle.component";
import { SideBarToggleService } from "./04-side-bar-toggle-service/side-bar-toggle.service";


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MainComponentService, ComponentAService, ComponentBService,
                  MainComponentInputOutput, ComponentAInputOutput, ComponentBInputOutput,
                  MainSideBarComponent, SideBarComponent, SideBarToggleComponent,
                  SideBarToggleServiceMain, SideBarServiceComponent, SideBarToggleServiceComponent ],
  bootstrap:    [ MainComponentService ],
  providers:    [ CommonService, SideBarToggleService ]
})

export class LinkBetweenComponents { }
