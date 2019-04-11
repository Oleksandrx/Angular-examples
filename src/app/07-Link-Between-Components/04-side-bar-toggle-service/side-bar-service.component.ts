import { Component, HostBinding, Input } from "@angular/core";
import { SideBarToggleService } from "./side-bar-toggle.service";

@Component({
  selector: "side-bar-service-component",
  templateUrl: "./side-bar-service.component.html",
  styles: [":host-context(body) {box-sizing: border-box; display: none; position: absolute; \
            right: 0; top: 0; width: 300px; height: 100%; padding: 20px 10px; background: #ccc; } \
            :host.is-open { display: block; }"]
//   styleUrls: ['./side-bar.component.css']
})

export class SideBarServiceComponent {

  @HostBinding("class.is-open") isOpen = false;

  constructor( private sideBarService: SideBarToggleService ) { }

    ngOnInit() {
        this.sideBarService.change.subscribe((isOpen: boolean) => { this.isOpen = isOpen; });
    }

}