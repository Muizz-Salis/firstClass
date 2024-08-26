import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reativeform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reativeform.component.html',
  styleUrl: './reativeform.component.css'
})
export class ReativeformComponent {
constructor(public formbuilder: FormBuilder, public routes:Router){}
public array:any=[]
public formone=this.formbuilder.group({
  username: ['', Validators.required],
  firstname: ['', [Validators.required, Validators.pattern('^[A-Z].*')]], // firstname: ''
  lastname:['',[Validators.required, Validators.pattern('^[A-Z].*')]],
  email:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  password:['', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>/?]).{8,}$')]],
})
signup(){
  this.array.push(this.formone.value);
  localStorage.setItem('reactiveapp', JSON.stringify(this.array));
  console.log(localStorage.getItem('reactiveapp'));
  if (localStorage['reactiveapp']){
    this.routes.navigate(['/reactivesignin']);
  }
  


  // console.log(this.formone.value); //get value in the console
  // // console.log(this.formone.value['firstname']);
  // console.log(this.formone.controls['firstname'].setValue('')); // to reset  each input

  
}
}
