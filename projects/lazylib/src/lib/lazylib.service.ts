import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazylibService {

  constructor() { }

  hello() {
    alert("Hello from lazy lib 1");
  }
}
