// http://www.omdbapi.com/
// get API Key http://www.omdbapi.com/apikey.aspx

import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-omdb-api",
  templateUrl: "./omdb-api.component.html",
  styleUrls: ["./omdb-api.component.css"]
})

export class OmdbComponent {

    selectedMovie = 0;
    movieTitle = "None";
    response: any;
    private chosenMovie = "";

    constructor(private http: HttpClient) {

    }
    selectMovie(event) {
        // this.selectedMovie = event.target.value;
        this.movieTitle = event.target.options[event.target.value].text;
        // this.selectedMovie = movie.split(/ w/);
        this.chosenMovie = this.movieTitle.split(" ").join("+");
    }

    searchMovieByTitle() {
        // this.http.get("http://www.omdbapi.com/?t=" + this.movieTitle)
        // http://www.omdbapi.com/?i=tt3896198&apikey=3c524028
        this.http.get("http://www.omdbapi.com/?t=Sherlock+Holmes&apikey=3c524028");
        this.http.get("http://www.omdbapi.com/?t=" + this.chosenMovie + "&apikey=3c524028")
        .subscribe((response) => {
            this.response = response;
            console.log(this.response);
        });
    }

}
