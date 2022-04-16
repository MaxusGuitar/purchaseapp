import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User2 } from "./user2";

@Injectable()
export class HttpService2 {
  constructor(private http: HttpClient) {}

  postData(user2: User2) {
    const body = { name10: user2.name10, age10: user2.age10 };
    return this.http.post("http://localhost:4200/postuser", body);
  }
}
