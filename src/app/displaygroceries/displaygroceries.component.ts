import { Component } from '@angular/core';
import { ActivatedRoute,} from '@angular/router'; 
import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-displaygroceries',
  standalone: true,
  imports: [],
  templateUrl: './displaygroceries.component.html',
  styleUrl: './displaygroceries.component.css'
})
export class DisplaygroceriesComponent {
  constructor(public route:ActivatedRoute, public productService:ProductServicesService){}


  public users:any = [];

  ngOnInit(): void {
      console.log(this.route.snapshot.paramMap.get('id'));

      this.productService.getUsers().subscribe(users => {
        this.users = users;
        console.log(users);
      })
    };
  }


