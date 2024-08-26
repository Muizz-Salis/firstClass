import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactappserviceService {

  constructor() { }
  public contactbehaviour=new BehaviorSubject<any>({
    name: 'Ola',
    pnumber: '08105949387',
    emaiil: 'muizzadeyanju@gmal.com',
    add: 'Lagos',
  })

  public getcontact(){
    return JSON.parse(localStorage.getItem('appcontacts')!)

  }

}
