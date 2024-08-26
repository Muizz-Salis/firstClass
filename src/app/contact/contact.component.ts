import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 public name=''
 public phonenumber=''
 public email=''
 public address=''

 resetForm() {
  this.contactarray = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
}


 public contactarray: any=[]
  createContact(){
    let contactobj = {
      name:this.name,
      phonenumber:this.phonenumber,
      email:this.email,
      address:this.address
    }
    this.contactarray.push(contactobj)
    console.log(this.contactarray);
    localStorage.setItem('appcontacts', JSON.stringify(this.contactarray))
    console.log(localStorage['appcontacts']);
    
  }
  ngOnInit(){
    let data = localStorage.getItem('appcontacts');
    if(data){
      this.contactarray = JSON.parse(data);
    }
  }

}

