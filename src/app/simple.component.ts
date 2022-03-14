import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "simple-comp",
  template: `<p>Привет {{ newname }}</p>`,
  styleUrls: ["./app.component.css"],
})
export class SimpleComponent implements OnInit, OnChanges {
  @Input() newname: string = "";

  constructor() {
    this.log(`constructor`);
  }
  ngOnInit() {
    this.log(`onInit`);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  private log(msg: string) {
    console.log(msg);
  }
}
