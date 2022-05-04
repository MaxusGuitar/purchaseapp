import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "format",
})
//Если нам потребуется некоторая предобработка при выводе данных,
//дополнительное форматирование, то мы можем для этой цели написать свои собственные pipes.
//Классы pipes должны реализовать интерфейс PipeTransform
export class FormatPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return value.toString().replace(".", ","); //вместо первого выдает второе (в скобках)
  }
}
