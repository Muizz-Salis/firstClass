import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
constructor(public userserv:UserService){}
public userarray:any=[]
public userarray2:any=[]
public msg: string='';

ngOnInit(){
  console.log(this.userserv);
  this.userarray=this.userserv.getuserarray()
  this.userarray2=this.userserv.getuserarray2()
  this.msg=this.userserv.msg
}
}
