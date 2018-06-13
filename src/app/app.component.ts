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
    for (var i = 0; i < data.length; i++) this.areas.push({label:data[i].entitylabel,area:data[i].propertyvalue,bg:data[i].img, bgc:data[i].bgc});
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
}
