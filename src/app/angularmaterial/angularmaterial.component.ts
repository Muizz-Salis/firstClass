import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';




@Component({
  selector: 'app-angularmaterial',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatButtonModule,MatStepperModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,],
  templateUrl: './angularmaterial.component.html',
  styleUrl: './angularmaterial.component.css'
})
export class AngularmaterialComponent {

  public firstname='';
  public lastname='';
  public email='';
  public address='';
  public phonenumber='';
  public status='';



  private _formBuilder = inject(FormBuilder);


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  isLinear = false;


submit(){
  let form ={
  fname: this.firstname,
  lname: this.lastname,
  address: this.address,
  pnumber: this.phonenumber,
  status: this.status,
  }

}

}
