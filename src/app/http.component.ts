import { Component } from "@angular/core";
import { HttpService2 } from "./http2.service";
import { User2 } from "./user2";

@Component({
  selector: "http",
  template: `<div class="form-group">
      <label>Имя</label>
      <input
        class="form-control"
        name="username10"
        [(ngModel)]="user2.name10"
      />
    </div>
    <div class="form-group">
      <label>Возраст</label>
      <input
        class="form-control"
        type="number"
        name="age10"
        [(ngModel)]="user2.age10"
      />
    </div>
    <div class="form-group">
      <button class="btn btn-default" (click)="submit(user2)">Отправить</button>
    </div>
    <div *ngIf="done">
      <div>Получено от сервера:</div>
      <div>Имя: {{ receivedUser.name }}</div>
      <div>Возраст: {{ receivedUser.age }}</div>
    </div>`,
  providers: [HttpService2],
})
export class AppHttp2 {
  user2: User2 = new User2("", 0); // данные вводимого пользователя

  receivedUser: User2 | undefined; // полученный пользователь
  done: boolean = false;
  constructor(private httpService2: HttpService2) {}
  submit(user2: User2) {
    this.httpService2.postData(user2).subscribe(
      (data: any) => {
        this.receivedUser = data;
        this.done = true;
      },
      (error) => console.log(error)
    );
  }
}
