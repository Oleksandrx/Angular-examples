import { Component, OnInit } from "@angular/core";

@Component({
    selector: "builtin-pipes",
    templateUrl: "./01. builtin-pipes.component.html"
})

export class BuiltinPipesComponent implements OnInit {

        products: any[];
        todayDate: Date;
        
        ngOnInit() {
            this.products = [
                { name: "Item 1", price: 100, category: "Category 1", code: "aa21c", date: new Date(2019, 2, 25) },
                { name: "Item 2", price: 45, category: "Category 1", code: "br98s", date: new Date(2019, 2, 25) },
                { name: "Item 3", price: 65.4, category: "Category 2", code: "dg25k", date: new Date(2019, 2, 25) },
                { name: "Item 4", price: 11.8, category: "Category 2", code: "gf71t", date: new Date(2019, 2, 25) }
            ]

            this.todayDate = new Date();
        }
}