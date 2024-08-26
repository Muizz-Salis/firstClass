import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  name: any={};

  constructor(public route: ActivatedRoute,public routes:Router){}
  ngOnInit(){
    const currentuser=JSON.parse(localStorage.getItem('currentUser')!)
    this.name=currentuser
    // const username = this.route.snapshot.paramMap.get('username');
    // const localdata = JSON.parse(localStorage.getItem('reactiveapp')!);
    // const user = localdata.find((user: any)=> user.username === username);
    // if(user){
    //   this.name = user;
    //   console.log(user);
      
    // }
  }
  logOut(){
    // localStorage.removeItem('reactiveapp');
    localStorage.removeItem('currentUser');
    this.routes.navigate(['/home']);
  }

}
