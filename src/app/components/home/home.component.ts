import { Component } from '@angular/core';
import { ToolbarComponent } from '../common/toolbar/toolbar.component';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../common/category/category.component';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, HeroComponent, CommonModule, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories = [
    { name: 'Men', image: 'assets/men.png' },
    { name: 'Women', image: 'assets/women.png' },
    { name: 'Kids', image: 'assets/kids.png' },
  ];
}
