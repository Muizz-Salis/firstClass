import { Component } from '@angular/core';
import { ContactappserviceService } from '../service/contactappservice.service';


@Component({
  selector: 'app-childbehaviourone',
  standalone: true,
  imports: [],
  templateUrl: './childbehaviourone.component.html',
  styleUrl: './childbehaviourone.component.css'
})
export class ChildbehaviouroneComponent {
constructor(public conservice:ContactappserviceService){}
public contactarray: any=[]
ngOnInit(){
  console.log(this.conservice.getcontact());
  // this is where i stopped
  
  // this.contactarray=JSON.parse(localStorage.getItem('appconatcts')!)

  console.log(this.contactarray);
  
  
}

}
