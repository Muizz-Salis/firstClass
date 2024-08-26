import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tempdriven-f',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tempdriven-f.component.html',
  styleUrl: './tempdriven-f.component.css'
})
export class TempdrivenFComponent {
  fname= "";
  lname= "";

}
