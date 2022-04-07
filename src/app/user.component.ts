import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { User } from "./user";

@Component({
  selector: "user-app",
  template: `<div>{{ this.httpService.errorMessage }}</div>
    <!--тут выводится ошибка-->
    <ul>
      <li *ngFor="let user of users">
        <p>Имя пользователя: {{ user?.name }}</p>
        <p>Возраст пользователя: {{ user?.age }}</p>
      </li>
    </ul>`,
  providers: [HttpService],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  error: any;
  constructor(public httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => (this.users = data));
  }
}
