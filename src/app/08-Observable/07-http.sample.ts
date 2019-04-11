import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

interface DataResponse {
    userId: string;
    id: string;
    title: string;
    body: string;
}

@Component({
    selector: 'http-sample',
    templateUrl: './07-http.sample.html'
})

export class HttpSample {

    posts: DataResponse[];
        
    constructor(private http: HttpClient ) {}

    download() {

    this.posts = [];

    this.http.get<DataResponse[]>("http://jsonplaceholder.typicode.com/posts/")
        .subscribe(post =>  this.posts = post);
    }
}

// this.http.get<DataResponse[]>("http://jsonplaceholder.typicode.com/posts/")
// .flatMap((response) => response.json())
// .filter<any>((post) => post.userId == 5)
// .map((post) => post.body)
// .subscribe((post)=>{ this.post.push(post);});