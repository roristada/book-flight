import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Mock } from './mock';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  flightD: any = [ ];
  constructor() {
    this.flightD = Mock.mockFlight
  }
  getPages(){
    return this.flightD
  }
}
