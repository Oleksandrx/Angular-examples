import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { HttpService } from "./http.service";
import { DataBindingModule } from "./01-Data-Binding/01.Data.Binding.module";
import { EventsModule } from "./02-Events/02.Events.module"
import { HTTPServicesModule } from "./03-HTTP-services/03.HTTP.Services.module";
import { MyFormsModule } from "./04-Forms/04.Forms.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    EventsModule,
    HTTPServicesModule,
    MyFormsModule
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
