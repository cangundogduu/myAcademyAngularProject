import { Component } from '@angular/core';
import { Category } from '../../_models/category';
import { CategoryService } from '../../_services/category.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

categoryList: Category[];


constructor(private categoryService: CategoryService) {
  this.getAll();
}

getAll(){
  this.categoryService.getAll().subscribe({
    next: values => this.categoryList=values,
    error: err => console.log(err)
  })
}


}
