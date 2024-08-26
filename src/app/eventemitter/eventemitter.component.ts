import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventemitterchildComponent } from "../eventemitterchild/eventemitterchild.component";

@Component({
  selector: 'app-eventemitter',
  standalone: true,
  imports: [FormsModule, EventemitterchildComponent],
  templateUrl: './eventemitter.component.html',
  styleUrl: './eventemitter.component.css'
})
export class EventemitterComponent {
public msg=''
public toChild='';
public childmsg=''
public msgtochild = ''

receivemsg(data:any){
  this.childmsg=data
}

sendtochild(){
this.msgtochild=this.toChild;
this.toChild='';
}

}
