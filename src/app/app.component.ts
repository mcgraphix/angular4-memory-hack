import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data: string[] = [];
  constructor() {
      for (let i = 0; i < 1000; i++) {
        this.data.push((new Date().getTime() * Math.random() * 100000).toString(10));
      }
  }
}
