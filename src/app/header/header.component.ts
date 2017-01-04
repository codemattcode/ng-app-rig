import { Component } from '@angular/core';


@Component({
  selector: 'header',
  template: `
  <h1>{{title}}</h1>
`
})

export class HeaderComponent {
  title = 'this is the header';
}
