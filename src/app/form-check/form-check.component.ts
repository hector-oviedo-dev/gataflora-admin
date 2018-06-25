import { Component } from '@angular/core';
import { EventsService } from 'angular4-events';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-form-check',
  templateUrl: './form-check.component.html',
  styleUrls: ['./form-check.component.css']
})
export class FormCheckComponent {
  public _event_type:string = "onForm";

  public _compound_ID:string;

  public _ID:string;
  public _value:string;
  
  public _enabled:boolean;
  public _required:boolean;

  public _label:boolean;

  public _update:boolean = false;

  public _valid:boolean = true;
  
  private events:EventsService;
  constructor(private services:ServicesService) {
    this.events = services.events;
  }
  public getValue() {
    return {
      id:this._ID,
      value:this._value
    }
  }
  public onChange(event) {
    console.log(this._value)
    //this._value = event

    let data = { id_compound:this._compound_ID, update:this._update, id:this._ID, valid:true };
    this.events.publish(this._event_type, JSON.stringify(data));
  }
}