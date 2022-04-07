import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class HttpService {
  errorMessage: String = "";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get("assets/users.json").pipe(
      map((data: any) => {
        let usersList = data["userList"];

        return usersList.map(function (user: any): User {
          return new User(user.userName, user.userAge);
        });
      }),
      catchError((err) => {
        console.log(err, "Чет пошло не так");
        this.errorMessage = err.message;
        // Ошибка собственно представляет объект, из которого мы можем получить ряд данных.
        // В частности, свойство message позволяет получить сообщение об ошибке,
        // а свойство status - статусный код ответа.
        // Так, в данном случае вся обработка заключается в том, что этот объект выводится на консоль,
        // а свойству errorMessage сервиса передается сообщение об ошибке(если запрос прошел успешно,
        // то этому свойству присваивается пустая строка).
        return [];
      })
    );
  }
}
