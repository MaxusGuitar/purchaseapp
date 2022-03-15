// import { Directive, ElementRef, Renderer2 } from "@angular/core";

// @Directive({
//   selector: "[bold]",
//   host: {
//     //тут определяются все события и обработчики
//     "(mouseenter)": "onMouseEnter()", //наводка курсора
//     "(mouseleave)": "onMouseLeave()", //отводка курсора
//   },
// })
// export class BoldDirective {
//   constructor(private element: ElementRef, private renderer: Renderer2) {
//     this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
//   }

//   onMouseEnter() {
//     this.setFontWeight("bold");
//   }
//   onMouseLeave() {
//     this.setFontWeight("normal");
//   }
//   private setFontWeight(val: string) {
//     //val - возвращает из строки только числа
//     this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
//   }
// }

import { Directive, HostListener, Input, HostBinding } from "@angular/core";

@Directive({
  selector: "[bold]",
})
export class BoldDirective {
  @Input("bold") selectedSize = "18px";
  @Input() defaultSize = "16px";

  private fontSize: string;
  private fontWeight = "normal";
  constructor() {
    this.fontSize = this.defaultSize;
  }

  @HostBinding("style.fontSize") get getFontSize() {
    return this.fontSize;
  }

  @HostBinding("style.fontWeight") get getFontWeight() {
    return this.fontWeight;
  }

  @HostBinding("style.cursor") get getCursor() {
    return "pointer";
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.fontWeight = "bold";
    this.fontSize = this.selectedSize;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.fontWeight = "normal";
    this.fontSize = this.defaultSize;
  }
}
