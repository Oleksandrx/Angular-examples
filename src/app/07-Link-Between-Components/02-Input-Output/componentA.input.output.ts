import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "component-a-input-output",
  templateUrl: "./componentA.input.output.html",
  styles: ["h1 { font-family: Lato; }"]
})

  // tslint:disable-next-line:component-class-suffix
  export class ComponentAInputOutput  {
    clickCnt = 0;
    @Output() clickChange: EventEmitter<number> = new EventEmitter();

    public clickMe() {
      this.clickCnt++;
      this.clickChange.emit(this.clickCnt);
    }
  }
