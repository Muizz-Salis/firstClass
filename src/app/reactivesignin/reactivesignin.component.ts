import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivesignin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactivesignin.component.html',
  styleUrl: './reactivesignin.component.css'
})
export class ReactivesigninComponent {
  constructor(public formbuilder: FormBuilder, public routes:Router){}
public array:any=[]
public formtwo=this.formbuilder.group({
email: ['', Validators.required],
password: ['', Validators.required]
})

signin(){
  const saveduser = localStorage.getItem('reactiveapp');
  console.log(saveduser);
  
  if (saveduser){
    const users = JSON.parse(saveduser);
    const existingUser = users.find((user: any) => user.email === email);
      if (existingUser) {
        alert('This email is already registered. Please use a different email or reset your password.');
        return; // Prevent login if the email already exists
      }
    const {email, password} = this.formtwo.value; 
    const data = users.find(
      (data: any)=> data.email === email && data.password === password
    );
    if(data){
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.routes.navigate(['/dashboardguard']);
      // this.routes.navigate(['/dashboard', data.username]);

    }else{
      console.error('Error')
      alert('Incorrect Email or Password');
    }
  }else{
    alert('Email does not exist/ User not found')
  }
}

}
