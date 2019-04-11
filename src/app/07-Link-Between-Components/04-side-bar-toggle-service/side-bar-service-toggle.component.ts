import { Component, HostListener } from "@angular/core";
import { SideBarToggleService } from "./side-bar-toggle.service";

@Component({
  selector: "side-bar-service-toggle-component",
  templateUrl: "./side-bar-service-toggle.component.html",
//   styleUrls: ["./side-bar-service-toggle.component.css"]
  styles: [":host-context(body) { display: inline-block; background: #ccc; padding: 10px; cursor: pointer; } \
            :host:hover { background: #ddd; }"] 
})

export class SideBarToggleServiceComponent {

  constructor( private sideBarService: SideBarToggleService ) { }

  @HostListener('click') click() { this.sideBarService.toggle(); }

}