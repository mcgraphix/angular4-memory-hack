import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('1.2s ease-in')
    ]),
    transition('* => void', [
      animate('1.2s 0.1s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ])
  ]
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


@Component({
  selector: 'app-item',
  template: '{{label}}'
  
})
export class AppItemComponent {
  @Input() label: string;
}