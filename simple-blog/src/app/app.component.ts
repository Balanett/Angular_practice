import { Component } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  body: string;
  postImg?: string;
}

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-blog [posts]="posts"></app-blog>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'simple-blog';

  posts: Post[] = [
    {
      id: 1,
      title: 'Lorem ipsum',
      body: 'This is the body of a post.'
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      body: 'This is the body of a post.'
    },
    {
      id: 3,
      title: 'Lorem ipsum',
      body: 'This is the body of a post.'
    }
  ];
}
