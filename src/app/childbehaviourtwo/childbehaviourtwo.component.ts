import { Component } from '@angular/core';
import { ContactappserviceService } from '../service/contactappservice.service';

@Component({
  selector: 'app-childbehaviourtwo',
  standalone: true,
  imports: [],
  templateUrl: './childbehaviourtwo.component.html',
  styleUrl: './childbehaviourtwo.component.css'
})
export class ChildbehaviourtwoComponent {

  constructor(public contactservice: ContactappserviceService){}
  public contactobj:any={}
  ngOnInit(){
    // console.log(this.contactservice.contactbehaviour);
    this.contactservice.contactbehaviour.subscribe(data=>{
      console.log(data);
      this.contactobj=data
    })
    
  }

}
