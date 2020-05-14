import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    //new Recipe("Test", "Descrizione", "https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2019/11/Come-pastorizzare-le-uova-7.jpg?w=580")
    //new Recipe("", "", "")
  ];

  constructor(private dataStorageservice: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageservice.sendGetRequest('recipes').subscribe((data:any[])=>{
      console.log(data);
      this.recipes=data;
    })
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
