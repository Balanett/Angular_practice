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
      postImg: 'https://i.picsum.photos/id/423/300/150.jpg?hmac=_9FqMl3LsMBQrrngVKfgX84VLscj-xOeaNldxf_MKjI',
      title: 'Lorem ipsum',
      body: 'This is the body of a post.'
    },
    {
      id: 2,
      postImg: 'https://i.picsum.photos/id/604/300/150.jpg?hmac=r_0GRg5JotHr8QoXtTO5Q-tOJ1dNo_hDUKGK_DRGDwk',
      title: 'Lorem ipsum',
      body: 'This is the body of a post.'
    },
    {
      id: 3,
      postImg: 'https://i.picsum.photos/id/294/300/150.jpg?hmac=ZTyeH6NstzvSGc3ITkQr8ebMSynbuiRzXzCdI3vgt-g',
      title: 'Lorem ipsum',
      body: 'This is the body of a post.'
    }
  ];
}
