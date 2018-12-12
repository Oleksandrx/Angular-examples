import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DataBindingModule } from "./01-Data-Binding/attribute-directives.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
