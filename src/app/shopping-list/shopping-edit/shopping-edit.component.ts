import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Shoping } from '../../shoping-item/shoping.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
ammount: number;
name;
temp;
shoping: Shoping;
@Output() shopingdata = new EventEmitter< Shoping>();
  constructor() { }

  ngOnInit() {
  }
callammount( ammount: Event) {
this.temp = (ammount.target as HTMLInputElement).value;
this.ammount = +this.temp;
}
callname(name: Event) {
this.name = ( name.target as HTMLInputElement).value;
}
onclick() {
this.shoping = new Shoping(this.name , this.ammount);
this.shopingdata.emit(this.shoping);
}
}
