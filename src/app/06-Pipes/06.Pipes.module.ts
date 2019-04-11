import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { BuiltinPipesComponent } from './01. builtin-pipes.component';
import { AsyncPipesComponent } from './02. async-pipe.component';
import { CustomPipeComponent } from './03. custompipe.component';
import { CustomPipe, MyPurePipe, MyImpurePipe } from './03. custompipe';
import { FormatDistancePipe } from './03. format-distance.pipe';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [
        BuiltinPipesComponent,
        AsyncPipesComponent,
        CustomPipeComponent,
        CustomPipe,
        FormatDistancePipe,
        MyPurePipe,
        MyImpurePipe
    ]
  })

export class PipesModule {
}
