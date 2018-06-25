import { Component } from '@angular/core';
import { EventsService } from 'angular4-events';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-form-check-list',
  templateUrl: './form-check-list.component.html',
  styleUrls: ['./form-check-list.component.css']
})
export class FormCheckListComponent {
  public _event_type:string = "onForm";

  public _compound_ID:string;

  public _ID:string;

  public _enabled:boolean;
  public _required:boolean;

  public _txt_required:string;

  public _min:number;
  public _max:number;

  public _label:string;

  public _options = [];

  public _valid:boolean;
  
  public _update:boolean = false;

  private events:EventsService;
  constructor(private services:ServicesService) {
    this.events = services.events;
  }
  public createForm() {
      let tmp = 0;
      for (let i = 0; i < this._options.length; i++) if (this._options[i].check) tmp++;

      if (tmp >= this._min && tmp <= this._max) this._valid = true;
      else this._valid = false;
    }
    public getValue() {
      return {
        id:this._ID,
        value:this._options
      }
    }
    public onChange(i) {
        if (this._options[i].check) this._options[i].check = false;
        else this._options[i].check = true;

        let tmp = 0;
        for (let i = 0; i < this._options.length; i++) if (this._options[i].check) tmp++;

        if (tmp >= this._min && tmp <= this._max) this._valid = true;
        else this._valid = false;
        
        let data = { id_compound:this._compound_ID, update:this._update, id:this._ID, valid:this._valid };
        this.events.publish(this._event_type, JSON.stringify(data));
    }
}
