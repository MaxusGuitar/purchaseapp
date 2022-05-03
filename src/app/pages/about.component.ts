import { Component } from "@angular/core";
import { ComponentCanDeactivate } from "../exit.about.guard";
import { Observable } from "rxjs";

@Component({
  selector: "about-app",
  template: `<h3>О сайте</h3>
    <button class="btn btn-default" (click)="save()">Сохранить</button>
    <a routerLink="">На главную</a> `,
})
export class AboutComponent implements ComponentCanDeactivate {
  saved: boolean = false; //В данном случае, если this.saved == false (то есть условно, если данные не сохранены), то выводим диалоговое окно для подтверждения действия
  save() {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      //Для имитации функционала в класс AboutComponent добавлено свойство saved,
      //которое указывает, сохранены ли данные.С помощью метода save(),
      //который вызывается по нажатию на кнопку, мы можем управлять значением этой переменной.
      //К примеру, нажали на кнопку, значит данные сохранены, и свойство saved равно true.
      return confirm("Вы хотите покинуть страницу?");
    } else {
      return true;
    }
  }
}
