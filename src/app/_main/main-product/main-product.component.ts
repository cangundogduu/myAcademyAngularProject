import { Component } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { Product } from '../../_models/product';
import { CategoryService } from '../../_services/category.service';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-main-product',
  standalone: false,
  templateUrl: './main-product.component.html',
  styleUrls: [
    './main-product.component.css',
 /*    "../../../../assets/vendor/bootstrap-icons/bootstrap-icons.css",
    "../../../../assets/vendor/aos/aos.css",
    "../../../../assets/vendor/glightbox/css/glightbox.min.css",
    "../../../../assets/vendor/swiper/swiper-bundle.min.css" */

  ]
})
export class MainProductComponent {
/**
 *
 */
products: Product[];
categories:Category[];

constructor(private productService:ProductService,
            private categoryService:CategoryService
) {
this.getAll();
this.getCategories();


}

getAll(){
  this.productService.getAll().subscribe({
    next: values => this.products = values
  })
}

getCategories(){
  this.categoryService.getAll().subscribe({
    next: values => this.categories = values
  })

}
}
