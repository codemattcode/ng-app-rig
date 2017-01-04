import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header></header>
  <h1>{{title}}</h1>
  <people></people>
`
})
export class AppComponent {
  title = 'lets go to work!';
}
