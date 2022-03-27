import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { LogService } from "./log.service";

@Component({
  selector: "app-new",
  template: `<div class="panel">
    <div>
      <input [(ngModel)]="name3" placeholder="Модель" />
      <button (click)="addItem(name3)">Добавить</button>
    </div>
    <table>
      <tr *ngFor="let item of items2">
        <td>{{ item }}</td>
      </tr>
    </table>
  </div>`,
  providers: [LogService, DataService],
})
export class NewComponent {
  items2: string[] = [];
  name3: string = "";
  constructor(private dataService: DataService) {}

  addItem(name3: string) {
    this.dataService.addData(name3);
  }
  ngOnInit() {
    this.items2 = this.dataService.getData();
  }
}
