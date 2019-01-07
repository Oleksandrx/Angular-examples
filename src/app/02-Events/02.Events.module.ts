import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule} from "@angular/forms";

import { ClickNgIfComponent } from "./01-Click-NgIf/ClickNgIfComponent";

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule
    ],
    declarations: [
      ClickNgIfComponent,
    ]
  })

export class EventsModule {
}
