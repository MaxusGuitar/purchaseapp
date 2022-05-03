import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";

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
import { ItemComponent } from "./item.component";
import { AppRouter } from "./app.router";
import { ItemStatComponent } from "./item.stat.component";
import { ItemDetailsComponent } from "./item.details.component";
import { Item2Component } from "./item2.component";
import { AboutGuard } from "./about.guard";
import { ExitAboutGuard } from "./exit.about.guard";

import { AboutComponent } from "./pages/about.component";
import { HomeComponent } from "./pages/home.component";
import { NotFoundComponent } from "./pages/not-found.component";

// определение маршрутов
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AboutGuard],
    canDeactivate: [ExitAboutGuard],
  },
  { path: "item/:id", component: ItemComponent },
  { path: "**", redirectTo: "/home" }, //для возврата на главную
];

const itemRoutes: Routes = [
  { path: "details", component: ItemDetailsComponent },
  { path: "stat", component: ItemStatComponent },
];

const appItemRoutes: Routes = [
  { path: "item/:id", component: ItemComponent },
  { path: "item/:id", component: ItemComponent, children: itemRoutes },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DataModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appItemRoutes),
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
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ItemComponent,
    AppRouter,
    ItemDetailsComponent,
    ItemStatComponent,
    Item2Component,
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/home" },
    AboutGuard,
    ExitAboutGuard,
  ], //для работы маршрутов
})
export class AppModule {}
