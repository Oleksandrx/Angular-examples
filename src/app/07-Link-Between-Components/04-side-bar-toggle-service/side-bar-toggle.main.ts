import { Component } from "@angular/core";

import { SideBarToggleService } from "./side-bar-toggle.service";

@Component({
  selector: "side-bar-toggle-service-main",
  templateUrl: "./side-bar-toggle.main.html",
  styles: [".container {position: relative; height: 500px; padding: 5px; border: 1px solid #ccc;}"]
//   styleUrls: [ './app.component.css' ]
})

export class SideBarToggleServiceMain {

    private isOpen: boolean;

    constructor(private sideBarService: SideBarToggleService) {
    }

    ngOnInit() {
        this.sideBarService.change.subscribe((isOpen: boolean) => { this.isOpen = isOpen; });
    }
}
