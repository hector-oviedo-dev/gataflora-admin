import { Injectable } from '@angular/core';
import { EventsService } from 'angular4-events';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private URL_BASE:string = "https://gataflora.herokuapp.com/";

  public events:EventsService;

  constructor(public http: HttpClient) {
    this.events = new EventsService();
    //this.connect();
  }
  public doExternal(service) {
    console.log("trying to open:",service)
    window.open(service, '_system', 'location=yes');
  }
  public doPost(service, data) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(this.URL_BASE + service, data, {headers: headers});
  }
  public doGet(service, data) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    let url = this.URL_BASE + service;

    return this.http.get(url, {headers: headers});
  }
}