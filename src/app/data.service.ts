import { Injectable, Optional } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({ providedIn: "root" }) // root - корневой уровень действия, что бы не добавлять DataService в провайдеры "newcomponent"
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
