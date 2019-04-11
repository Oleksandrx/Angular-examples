import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "main-app-component-input-output",
  templateUrl: "./main.component.input.output.html",
  styleUrls: [ "./main.component.input.output.css" ]
})

// tslint:disable-next-line:component-class-suffix
export class MainComponentInputOutput  {

  name = "Angular 6";

  cnt  = 0;
  public onAClicked(cnt: number) {
    console.log(cnt);
    this.cnt = cnt;
  }
}
