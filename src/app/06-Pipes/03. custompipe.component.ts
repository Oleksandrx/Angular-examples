import { Component } from "@angular/core";

@Component({
    selector: "custom-pipes",
    templateUrl: "./03. custompipe.component.html"
})

export class CustomPipeComponent {

    value: any;

    person1 = { firstName: "Petro", lastName: "Petrenko" };
    person2 = { firstName: "Petro", lastName: "Petrenko" };
  
    changePropPerson1() {
      this.person1.lastName = "...";
    }
  
    changeRefPerson1() {
      this.person1 = { firstName: "...", lastName: "..." };
    }
  
    changePropPerson2() {
      this.person2.lastName = "...";
    }
  
    changeRefPerson2() {
      this.person2 = { firstName: "...", lastName: "..." };
    }
}

