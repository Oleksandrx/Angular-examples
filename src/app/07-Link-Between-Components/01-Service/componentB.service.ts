import { Component } from "@angular/core";

import { CommonService } from "./common.service";

@Component({
  selector: "component-b-service",
  templateUrl: "./componentB.service.html",
  styles: ["h1 { font-family: Lato; }"]
})

export class ComponentBService  {

  clickCount = 0;

  constructor(private commonService: CommonService) {
    this.commonService.onClick.subscribe((cnt: number) => this.clickCount = cnt);
  }
}
