import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { NgForm } from "@angular/forms";

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: "purchase-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnChanges {
  isRed = false;
  isGreen = false;

  name: string = "Tom";
  age: number = 24;

  text: string = "";
  price: number = 0;

  items: Item[] = [
    { purchase: "Хлеб", done: false, price: 15.9 },
    { purchase: "Масло", done: false, price: 60 },
    { purchase: "Картофель", done: true, price: 22.6 },
    { purchase: "Сыр", done: false, price: 310 },
  ];
  addItem(text: string, price: number): void {
    if (text == null || text.trim() == "" || price == null) return;
    this.items.push(new Item(text, price));
  }

  clicks: number = 0;
  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }

  constructor() {
    this.log(`constructor`);
  }
  ngOnInit() {
    this.log(`onInit`);
  }

  ngOnDestroy() {
    this.log(`onDestroy`);
  }

  private log(msg: string) {
    console.log(msg);
  }

  newname: string = "Tom";
  newage: number = 25;
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  newnameagain: string = "Max";

  visibility: boolean = true;
  // переключаем переменную, то-есть при клике на кнопку будет добавляться класс и убираться повторно
  toggle() {
    this.visibility = !this.visibility;
  }

  condition: boolean = true;

  toggle2() {
    this.condition = !this.condition;
  }

  condition2: boolean = true;
  toggle3() {
    this.condition2 = !this.condition2;
  }

  name5: string = "";
  email3: string = "";
  phone3: string = "";

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
