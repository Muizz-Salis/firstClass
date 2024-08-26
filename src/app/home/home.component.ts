import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgFor, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    title = 'july_angular';
    link = 'http://facebook.com';
    click =false;
    terms = false;
    userInput ="";

    

    items =[
      {
        id:1,
        name:"Pen",
        price: 100,
        available: true
      },
      
      {
        id:2,
        name:"T-shirt",
        price: 100,
        available: true
      },
      {
        id:3,
        name:"Book",
        price: 200,
        available: false
      },

      {
        id:4,
        name:"Journal",
        price: 400,
        available: false
      },
    ]
    

    // books =[
    //   {
    //     id:1,
    //     name:"Pen",
    //     price: 100,
    //     available: true
    //   },
      
    //   {
    //     id:2,
    //     name:"T-shirt",
    //     price: 100,
    //     available: true
    //   },
    //   {
    //     id:3,
    //     name:"Book",
    //     price: 200,
    //     available: false
    //   },

    //   {
    //     id:4,
    //     name:"Journal",
    //     price: 400,
    //     available: false
    //   },
    // ]

    
    // changeColor(book: any): void{
    //   book.available = !book.available;
    // }

    // textbbook(index: number, book: any):number{
    // return book.id
    // }

    // myFunction(){
      
    //   console.log("Hello World!");
    //   alert("Alert is working!");
    // }
    }

    
  


