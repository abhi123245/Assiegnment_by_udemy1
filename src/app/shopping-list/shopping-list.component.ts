import { Component, OnInit } from '@angular/core';
import { Shoping } from '../shoping-item/shoping.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
shopingdata: Shoping;
shoping: Shoping[] = [
  new Shoping('apple', 10),
   new Shoping('orange', 20),
];
call(shop: Shoping) {
this.shoping[2] = shop;
}
  constructor() { }

  ngOnInit() {
  }

}
