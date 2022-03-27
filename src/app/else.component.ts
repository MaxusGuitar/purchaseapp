import { Component } from "@angular/core";

export class Phone {
  constructor(
    public title: string,
    public price: number,
    public company: string
  ) {}
}

@Component({
  selector: "one-else",
  template: `<div>
      <div class="form-group">
        <label>Название модели</label>
        <input
          class="form-control"
          name="title"
          [(ngModel)]="title"
          #phoneTitle="ngModel"
          (ngModelChange)="onTitleChange()"
        />
      </div>
      <div class="form-group">
        <label>Цена</label>
        <input
          type="number"
          class="form-control"
          name="price"
          [(ngModel)]="price"
        />
      </div>
      <div class="form-group">
        <label>Производитель</label>
        <select class="form-control" name="company" [(ngModel)]="company">
          <option *ngFor="let comp of companies" [value]="comp">
            <!--тут рендериться выпадающий список моделей телефонов-->
            {{ comp }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-default" (click)="addPhone()">Добавить</button>
      </div>
    </div>
    <div>
      <h3>Добавленные элементы</h3>
      <ul style="display: flex; ">
        <li
          style="margin-left: 10px; list-style-type: none;"
          *ngFor="let ph of phones"
        >
          <p>Model: {{ ph.title }}</p>
          <p>Company: {{ ph.company }}</p>
          <p>Price: {{ ph.price }}</p>
        </li>
      </ul>
    </div>`,
  styleUrls: ["./app.component.css"],
})
export class OneElseComp {
  title: string = "";
  price: number = 0;
  company: string = "";

  phones: Phone[] = [];
  companies: string[] = [
    "Apple",
    "Huawei",
    "Xiaomi",
    "Samsung",
    "LG",
    "Motorola",
    "Alcatel",
  ];

  addPhone() {
    this.phones.push(new Phone(this.title, this.price, this.company));
  }

  onTitleChange() {
    if (this.title == "нет") this.title = "неизвестно";
  }
}
