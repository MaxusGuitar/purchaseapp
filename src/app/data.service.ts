import { Injectable, Optional } from "@angular/core";
import { LogService } from "./log.service";

@Injectable() // root - корневой уровень действия
export class DataService {
  private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia 9"];
  constructor(@Optional() private logService: LogService) {}

  getData(): string[] {
    if (this.logService) this.logService.write("операция получения данных");
    return this.data;
  }
  addData(name3: string) {
    this.data.push(name3);
    if (this.logService) this.logService.write("операция добавления данных");
  }
}
