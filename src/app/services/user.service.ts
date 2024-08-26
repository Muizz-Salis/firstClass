import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  public userarray: number[] =[1,2,3,4,5,6,7,8,9,10]
  
  public userarray2: any=[
    {
      fname: 'Tobi',
      lname: 'Teeboy',
      Age: 87,
      gender: 'Male',
    },
  ]

  public msg:string='This is my angular class'

  public getuserarray(){
    return this.userarray
  }

  public getuserarray2(){
    return this.userarray2
  }

  // public getMsg(){
  //   // return this.msg
  // }
}
