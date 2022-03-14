import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "prechild-comp",
  template: `<button (click)="change(true)">+</button>
    <button (click)="change(false)">-</button>`,
  styleUrls: ["./app.component.css"],
})
export class PreChildComponent {
  @Output() onChanged = new EventEmitter<boolean>();
  change(increased: any) {
    this.onChanged.emit(increased);
  }
}
