import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppGitHubComponent } from "./01-GitHub-API/github-api.component";
import { OmdbComponent } from "./02-OMDb-API/omdb-api.component";

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],
    declarations: [
        AppGitHubComponent,
        OmdbComponent
    ]
  })

export class HTTPServicesModule {
}
