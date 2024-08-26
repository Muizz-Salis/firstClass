import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventemitterchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventemitterchild.component.html',
  styleUrl: './eventemitterchild.component.css'
})
export class EventemitterchildComponent {
  @Input() public msgfromparent=''
  public msgtoparent=''

  @Input() public mustwork='';
  @Output() public eventemit=new EventEmitter


  sendmsg(){
    this.eventemit.emit(this.msgtoparent);
    this.msgtoparent='';
  }
}
