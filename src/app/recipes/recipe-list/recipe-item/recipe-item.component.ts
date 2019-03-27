import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
@Output() data = new EventEmitter<void>();
  constructor() { }
  @Input() recipitem: Recipe;
  ngOnInit() {
  }
  call() {
this.data.emit();
  }

}
