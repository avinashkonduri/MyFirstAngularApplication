import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <app-footer></app-footer>
      `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first Web Angular2';
}
