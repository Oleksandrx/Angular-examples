import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { HttpService } from "./http.service";
import { DataBindingModule } from "./01-Data-Binding/01.Data.Binding.module";
import { EventsModule } from "./02-Events/02.Events.module";
import { AttributeDirectives } from "./03-Directives/03.Directives.module";
import { MyFormsModule } from "./04-Forms/04.Forms.module";
import { HTTPServicesModule } from "./05-HTTP-services/05.HTTP.Services.module";
import { PipesModule } from './06-Pipes/06.Pipes.module';
import { LinkBetweenComponents } from "./07-Link-Between-Components/07-Link.Between.Components.module"
import { ObservableModule} from "./08-Observable/08.Observable.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    EventsModule,
    AttributeDirectives,
    MyFormsModule,
    HTTPServicesModule,
    PipesModule,
    LinkBetweenComponents,
    ObservableModule
  ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
