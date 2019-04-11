import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { CreateComponent } from "./01-create.component";
import { DisposalComponent } from "./02-disposal.component";
import { PromiseObservableComponent } from './03-promise.observable.component';
import { EventObservableComponent } from './04-event.observable.component';
import { ColdHotObservableComponent } from './05-cold.hotobservable.component';
import { SubjectComponent } from './06-subject.component';
import { HttpSample } from './07-http.sample';
import { MainObservableService } from './08-observable-service-main';
import { PC1ObservableService } from './08-pc1-observable-service';
import { PC2ObservableService } from './08-pc2-observable-service';
import { ObservableService } from './08-observable-service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CreateComponent, 
                  DisposalComponent, 
                  PromiseObservableComponent,
                  EventObservableComponent,
                  ColdHotObservableComponent,
                  SubjectComponent,
                  HttpSample,
                  MainObservableService,
                  PC1ObservableService,
                  PC2ObservableService
                ],
  bootstrap:    [ CreateComponent ],
  providers:    [ CreateComponent, ObservableService ]
})

export class ObservableModule { }
