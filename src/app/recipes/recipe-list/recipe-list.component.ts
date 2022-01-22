import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cravingsjournal.com/wp-content/uploads/2019/08/Bolognese-sauce-1.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://cravingsjournal.com/wp-content/uploads/2019/08/Bolognese-sauce-1.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
