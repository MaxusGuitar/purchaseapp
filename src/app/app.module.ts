import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child.component";
import { PreChildComponent } from "./prechild.component";
import { SimpleComponent } from "./simple.component";
import { DataModule } from "./data/data.module";
import { BoldDirective } from "./bold.directive";
import { WhileDirective } from "./while.directive";
import { NewComponent } from "./new.component";
import { OneElseComp } from "./else.component";
import { TwoComponent } from "./two.component";

@NgModule({
  imports: [BrowserModule, FormsModule, DataModule],
  declarations: [
    AppComponent,
    ChildComponent,
    PreChildComponent,
    SimpleComponent,
    BoldDirective,
    WhileDirective,
    NewComponent,
    OneElseComp,
    TwoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
