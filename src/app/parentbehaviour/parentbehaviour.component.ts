import { Component } from '@angular/core';
import { ChildbehaviouroneComponent } from '../childbehaviourone/childbehaviourone.component';
import { ChildbehaviourtwoComponent } from '../childbehaviourtwo/childbehaviourtwo.component';

@Component({
  selector: 'app-parentbehaviour',
  standalone: true,
  imports: [ChildbehaviouroneComponent, ChildbehaviourtwoComponent],
  templateUrl: './parentbehaviour.component.html',
  styleUrl: './parentbehaviour.component.css'
})
export class ParentbehaviourComponent {

}
