import { Component, OnInit } from '@angular/core';
import { Lazylib2Service } from 'lazylib2';

@Component({
  selector: 'lazylib-lazylib',
  template: `
    <p>
      lazylib works!
    </p>
  `,
  styles: []
})
export class LazylibComponent implements OnInit {

  constructor(
    private service: Lazylib2Service
  ) { }

  ngOnInit() {
    this.service.hello();
  }

}
