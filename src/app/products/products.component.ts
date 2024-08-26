import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(
    public router: Router,
    public productService: ProductServicesService
  ){};
myFunction(){
this.router.navigate(['/groceries']);
}

}
