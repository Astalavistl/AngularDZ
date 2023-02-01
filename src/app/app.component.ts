import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: "<h1>{{ title }}</h1><app-hobby></app-hobby>",
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My App';
}
