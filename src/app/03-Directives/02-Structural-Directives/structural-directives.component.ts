import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-structural-directives",
  templateUrl: "./structural-directives.component.html",
  styleUrls: ["./structural-directives.component.css"]
})

export class StructuralDirectivesComponent implements OnInit {

    countBlocks: number;
    messageInBlock: string;

    visible = false;

    changeVisibility() {
        this.visible = !this.visible;
    }

    ngOnInit(): void {
    }

}
