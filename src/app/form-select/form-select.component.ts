import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ServicesService } from '../services.service';
import { EventsService } from 'angular4-events';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent {
  public _event_type:string = "onForm";

  public _compound_ID:string;

  public _ID:string;
  public _value:string;

  public _enabled:boolean;
  public _required:boolean;

  public _txt_required:string;

  public _label:string;
  public _placeholder:string;

  public _options = [];

  public _valid:boolean;

  public _form:FormGroup;

  public _update:boolean = false;
  
  private events:EventsService;
  constructor(private _fb:FormBuilder, private services:ServicesService) {
    this.events = services.events;
  }
  public createForm() {
    this._form = this._fb.group({data:[""]});

    let validators = [];
    if (this._required) validators.push(Validators.required);
    this._form.controls["data"].setValidators(validators);
  }
  public getValue() {
    return {
      id:this._ID,
      value:this._value
    }
  }
  public onChange(e) {
    if (this._value) this._valid = true;
    else this._valid = false;
    let data = { id_compound:this._compound_ID, update:this._update, id:this._ID, valid:this._form.controls['data'].valid };
    this.events.publish(this._event_type, JSON.stringify(data));
  }
}
