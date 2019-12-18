import { Component, OnInit } from '@angular/core';
import { LazylibService } from 'lazylib';

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

  constructor(private service: LazylibService) { }

  ngOnInit() {
    this.service.hello();
  }

}
