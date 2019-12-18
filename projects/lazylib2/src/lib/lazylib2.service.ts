import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lazylib2Service {

  constructor() { }

  hello() {
    alert("Hello from lazy lib 2");
  }
}
