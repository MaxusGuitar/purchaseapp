import { Component } from "@angular/core";
import { Router } from "@angular/router";

export class Item {
  constructor(
    public id: number,
    public product: string,
    public price: number
  ) {}
}

@Component({
  selector: "app-rout",
  template: `<div>
    <nav>
      <a routerLink="">Главная</a>
      <a routerLink="/about">О сайте</a>
    </nav>
    <div class="form-group">
      <h3>Параметры объекта</h3>
      <input
        type="number"
        [(ngModel)]="item.id"
        class="form-control"
        placeholder="Номер модели"
      /><br />
      <input
        type="number"
        [(ngModel)]="item.price"
        class="form-control"
        placeholder="Цена"
      /><br />
      <input
        [(ngModel)]="item.product"
        class="form-control"
        placeholder="Товар"
      /><br />
      <button (click)="goToItem(item)" class="btn">Перейти</button>
    </div>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppRouter {
  item: Item = new Item(1, "", 0);

  constructor(private router: Router) {}

  goToItem(myItem: Item) {
    this.router.navigate(["/item", myItem.id], {
      queryParams: {
        product: myItem.product,
        price: myItem.price,
      },
    });
  }
}
