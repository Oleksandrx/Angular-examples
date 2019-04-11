import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-attribute-directives",
  templateUrl: "./attribute-directives.component.html",
  styleUrls: ["./attribute-directives.component.css"]
})

export class AttributeDirectivesComponent implements OnInit {

    selectedColor = "black";
    colorItem = "";

    setRedColor() {
        this.colorItem = "red";
    }

    onDelete() {
        console.log("method is running!");
    }

    ngOnInit(): void {
        this.colorItem = "blue";
    }

}
