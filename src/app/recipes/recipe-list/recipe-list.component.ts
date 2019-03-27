import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('the first recipe' , 'this is for test' , 'https://www.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg'),
  new Recipe('the second recipe' , 'this is for test' , 'https://www.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg')
];
 @Output() data1 = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
recipecall(recipe: Recipe) {
this.data1.emit(recipe);
}
}
