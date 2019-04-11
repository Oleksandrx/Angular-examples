// API https://developer.github.com/v3/users/

import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-github-api",
  templateUrl: "./github-api.component.html",
  styleUrls: ["./github-api.component.css"]
})

export class AppGitHubComponent {

    userName = "";
    response: any;

    constructor(private http: HttpClient) {

    }

    searchUser() {
        this.http.get("https://api.github.com/users/" + this.userName)
        .subscribe((response) => {
            this.response = response;
            console.log(this.response);
        });

    }
}
