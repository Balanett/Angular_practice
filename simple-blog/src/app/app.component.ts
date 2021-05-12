import {Component} from '@angular/core';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  postImg?: string;
}

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'simple-blog';
}
