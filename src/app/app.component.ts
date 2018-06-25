import { Component,ViewChildren, Input } from '@angular/core';
import { EventsService } from 'angular4-events';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private events: EventsService;

  public areas = [];

  public selectedIndex;

  @ViewChildren('tabGroup') tabGroup;

  constructor(private services:ServicesService) {
    this.events = services.events;

    this.events.subscribe("onAreas", (data) => this.onAreas(data));

    this.events.subscribe("SearchFound", (data) => this.onSearchFound(data));

    let data = this.getExample2()
    console.log("ledata",data)
    let areasTMP = [
      {
        label:"Label 1",
        data:data
      },
      {
        label:"Label 2",
        data:data
        }
    ]
    this.events.publish("onAreas", areasTMP)
  }
  @Input()
  set ready(isReady: boolean) {
    if (isReady) console.log("endup");
    else console.log("oke");
  }
  ngOnInit() {

  }
  public onAreas(data) {
    this.areas = [];
    for (var i = 0; i < data.length; i++) this.areas.push({label:data[i].label,data:data[i].data});
    this.selectedIndex = 1;
  }
  public onFocusChange(e) {
    //console.log("haschanged: " + this.areas[e.index].label)
    this.services.events.publish("onUpdate",this.areas[e.index].label);
  }
  public onSearchFound(data) {
    for (var i = 0; i < this.areas.length; i++) {
      if (this.areas[i].area == data) {
        this.selectedIndex = i;
        break;
      }
    }
  }
  private getExample2() {
    var form = {
         type:"form",
         controls: [
           {
             "type":"IMAGE",
             "source":"http://www.catster.com/wp-content/uploads/2017/12/A-kitten-meowing.jpg",
             "orientation":"left",
             "width":"150",
             "height":"100",
             "label":"Gata Flora",
             "description":"Se la ponen: GRITA, Se la sacan: LLORA",
             "link_type":"LINK",
             "link":"http://www.catster.com/wp-content/uploads/2017/12/A-kitten-meowing.jpg",
             "section":""
           },
           {
             "type":"TITLE",
             "align":"CENTER",
             "label":"GetGata"
           },
           {
             "type":"TEXT",
             "align":"CENTER",
             "label":"Volver a GetFlora"
           },
           {
            "id":"NAME",
            "type":"INPUT",
            "value":"",
            "input_type":"TEXT",
            "hidden":false,
            "enabled":true,
            "required":true,
            "txt_required":"Debe ingresar su nombre.",
            "max":15,
            "min":5,
            "label":"Nombre",
            "placeholder":"Ingrese su Nombre"
          },
        ],
        display: {
          action:"getflora",
          label_submit:"Aceptar"
        }
        };
      
        var sections = [];
        sections.push(form);
  
        var res = { success:true, json: { sections:sections } };
      
      return res;
  }
}
