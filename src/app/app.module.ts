import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { DataModule } from "./data/data.module";

import { BoldDirective } from "./bold.directive";
import { WhileDirective } from "./while.directive";

import { AppComponent } from "./app.component";
import { ChildComponent } from "./child.component";
import { PreChildComponent } from "./prechild.component";
import { SimpleComponent } from "./simple.component";
import { NewComponent } from "./new.component";
import { OneElseComp } from "./else.component";
import { TwoComponent } from "./two.component";
import { FormComponent } from "./form.component";
import { UserComponent } from "./user.component";
import { AppHttp2 } from "./http.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DataModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
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
    FormComponent,
    UserComponent,
    AppHttp2,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
