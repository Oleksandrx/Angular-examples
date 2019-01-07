import { Component, OnInit } from "@angular/core";

import { HttpService } from "../../http.service";

@Component({
    selector: "app-Click-NgIf",
    templateUrl: "./ClickNgIf.Component.html"
})

export class ClickNgIfComponent implements OnInit { 
    isLoggedIn : boolean = true;
    
    constructor(svc: HttpService ) {
        svc.consoleText("Hello All!");
    }
    
    changeLogged(event) {
        this.isLoggedIn=!this.isLoggedIn;
        // console.log(event);
    }

    ngOnInit() {
    }
}
