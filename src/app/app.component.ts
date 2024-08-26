import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstClass';

  name = 'Muizz';
  username:string = "Adeyanju";

  num = 5;
  isAdmin = true;
  users=["Ade", "John", "Doe"];
  students = [
    {id:1, name: "John", dept: "hardware"},
    {id:2, name: "Peter", dept: "Cyber Security"},
    {id:3, name: "Mary", dept: "Software"},
  ];

}
