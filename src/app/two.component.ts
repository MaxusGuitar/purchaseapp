import { Component } from "@angular/core";

export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: string
  ) {}
}

@Component({
  selector: "two-else",
  template: `<div>
    <div class="form-group">
      <label>Имя</label>
      <input
        class="form-control"
        name="name"
        [(ngModel)]="user.name"
        #name="ngModel"
        required
      />
      <div [hidden]="name.valid || name.untouched" class="alert alert-danger">
        Не указано имя
      </div>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input
        class="form-control"
        name="email"
        [(ngModel)]="user.email"
        #email="ngModel"
        required
        pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
      />
      <!--Здесь проверяется валидность поля email. Для этого мы берем переменную email, 
      которая представляет связанный с полем ввода объект NgModel (#email="ngModel"), 
      и смотрим на свойства valid и untouched у этого объекта. 
      Если хотя бы одно из этих свойств равно true, то атрибут hidden тоже равен true. 
      А это значит, что блок div будет скрыт. То есть если поле для ввода email валидно, 
      то блок скрывается. Иначе мы видим сообщение об ошибке.
    
    В принципе для проверки корректности нам достаточно посмотреть на свойство valid. 
    Однако не всегда может желательно сразу отображать ошибку при загрузке страницы. 
    В данном же случае мы смотрим на валидность, если поле ввода уже получало фокус.-->
      <div [hidden]="email.valid || email.untouched" class="alert alert-danger">
        Некорректный email
      </div>
    </div>
    <div class="form-group">
      <label>Телефон</label>
      <input
        class="form-control"
        name="phone"
        [(ngModel)]="user.phone"
        #phone="ngModel"
        required
        pattern="[0-9]{10}"
      />
      <div [hidden]="phone.valid || phone.untouched" class="alert alert-danger">
        <!--untouched - если не нажал, то ошибка не вылезит при пустом поле и наоборот-->
        Некорректный телефон
      </div>
    </div>
    <div class="form-group">
      <!--С помощью выражения [disabled]="name.invalid || email.invalid || phone.invalid" 
      для атрибута disabled устанавливается значение true, то есть кнопка отключается, 
      если хотя бы одно из полей не валидно.-->
      <button
        [disabled]="name.invalid || email.invalid || phone.invalid"
        class="btn btn-default"
        (click)="addUser()"
      >
        Добавить
      </button>
    </div>
  </div>`,
})
export class TwoComponent {
  user: User = new User("", "", "");
  addUser() {
    console.log(this.user);
  }
}
