import { Component } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { Product } from '../../_models/product';

@Component({
  selector: 'app-main-product',
  standalone: false,
  templateUrl: './main-product.component.html',
  styleUrls: [
    './main-product.component.css',
    "../../../../assets/vendor/bootstrap-icons/bootstrap-icons.css",
    "../../../../assets/vendor/aos/aos.css",
    "../../../../assets/vendor/glightbox/css/glightbox.min.css",
    "../../../../assets/vendor/swiper/swiper-bundle.min.css"

  ]
})
export class MainProductComponent {
/**
 *
 */
products: Product[];

constructor(private productService:ProductService) {
this.getAll();


}

getAll(){
  this.productService.getAll().subscribe({
    next: values => this.products = values
  })
}
}
