import { Component, OnInit } from '@angular/core';
import * as hello from 'hello-world-js';

@Component({
  selector: 'lazylib2-lazylib2',
  template: `
    <p>
    lazylib2 works!
    </p>
  `,
  styles: []
})
export class Lazylib2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    alert(hello.hello());
  }

}
