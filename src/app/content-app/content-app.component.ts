import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ServicesService } from '../services.service';
import { EventsService } from 'angular4-events';
import { FormAppComponent } from '../form-app/form-app.component';


@Component({
  selector: 'app-content-app',
  templateUrl: './content-app.component.html',
  styleUrls: ['./content-app.component.css']
})
export class ContentAppComponent {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  public components = [];

  public service:string;

  private onChangeEvt;
  private onContentEvt;
  private onLoadSectionEvt;

  private actual = 0;
  private total = 0;

  private events:EventsService;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private services:ServicesService) {
    this.events = services.events;
    
    this.onChangeEvt = this.events.subscribe('onChange', (content) => { this.onChange(content); });
    this.onContentEvt = this.events.subscribe('onContent', (content) => { this.onContent(content); });
    this.onLoadSectionEvt = this.events.subscribe('onLoadSection', (content) => { this.onLoadSection(content); });
  }
  public ngOnDestroy() {
    this.onChangeEvt.unsubscribe();
    this.onContentEvt.unsubscribe();
    this.onLoadSectionEvt.unsubscribe();
  }
  public onChange(content) {
    this.events.publish("onHide","onHide");

    this.service = content;
    this.container.clear();
    this.doStart();
  }
  public onContent(content) {
    this.events.publish("onHide","onHide");

    this.container.clear();
    this.onServiceResult(content);
  }
  public onLoadSection(content) {
    this.actual++;
    if (this.actual == this.total) this.events.publish("onRefresh","onRefresh");
  }
  public doStart() {
    this.events.publish("onSpinner", true);
      this.services.doGet(this.service,"").subscribe(
        data => { this.onServiceResult(data); },
        err => { this.events.publish("onError", "404 Server Error"); }
      );
  }
  public onServiceResult(data) {
    if (!data.success) {
      this.events.publish("onError", data);
      return;
    }

    this.events.publish("onSpinner", false);
    let res = data.json;

    if (res.sections.length) {
      this.actual = 0;
      this.total = res.sections.length;

      for (var i = 0; res.sections.length > i; i++) {

        if (res.sections[i].type) {

          switch (res.sections[i].type) {
            case "form":
              this.addFormComponent(res.sections[i]);
              break;
          }
        } else this.events.publish("onError", "Se esperaba en posicion" + i.toString() +" de 'sections' el objeto 'type'");
      }
    } else this.events.publish("onError","Se esperaba array 'sections'");
  }
  ///Add Form View
  public addFormComponent(data:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormAppComponent);
    const component = this.container.createComponent(componentFactory);

    (<FormAppComponent>component.instance)._action       = data.display.action;

    (<FormAppComponent>component.instance)._label_submit = data.display.label_submit;

    (<FormAppComponent>component.instance).values        = data.controls;

    (<FormAppComponent>component.instance).startProcess();

    this.components.push(component);
  }
}
