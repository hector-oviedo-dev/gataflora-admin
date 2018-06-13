import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-title',
  templateUrl: './content-title.component.html',
  styleUrls: ['./content-title.component.css']
})
export class ContentTitleComponent {
  public _label:string;
  public _align:string;
  
  public _valid:boolean = true;
  constructor() {
  }
}
