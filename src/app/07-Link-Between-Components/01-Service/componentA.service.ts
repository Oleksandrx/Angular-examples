import { Component } from "@angular/core";

import { CommonService } from "./common.service";

@Component({
  selector: "component-a-service",
  templateUrl: "./componentA.service.html",
  styles: ["h1 { font-family: Lato; }"]
})

export class ComponentAService {

  clickCnt = 0;

  constructor(private commonService: CommonService) {
    this.commonService.onClick.subscribe((cnt: number) => this.clickCnt = cnt);
  }

  public clickMe() {
    this.commonService.doClick();
  }
}
