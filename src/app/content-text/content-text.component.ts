import { Component } from '@angular/core';

@Component({
  selector: 'app-content-text',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.css']
})
export class ContentTextComponent {
  public _label:string;
  public _align:string;
  
  public _valid:boolean = true;
  constructor() {
  }
}
