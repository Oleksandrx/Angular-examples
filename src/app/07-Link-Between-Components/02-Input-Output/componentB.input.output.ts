import { Component, Input } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "component-b-input-output",
  templateUrl: "./componentB.input.output.html",
  styles: ["h1 { font-family: Lato; }"]
})

// tslint:disable-next-line:component-class-suffix
export class ComponentBInputOutput {
  @Input() clickCount: number;
}
