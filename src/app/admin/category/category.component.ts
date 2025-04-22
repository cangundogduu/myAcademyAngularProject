import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

category: string = 'Kategoriler';
categoryList: string[] = ['Kategori1', 'Kategori2', 'Kategori3', 'Kategori4', 'Kategori5'];

}
