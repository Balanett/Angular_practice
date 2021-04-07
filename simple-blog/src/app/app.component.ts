import { Component } from '@angular/core';
import { PostsService } from './posts.service';

export interface Post {
  id: number;
  title: string;
  body: string;
  postImg?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'simple-blog';

  constructor(private postsService: PostsService) {
    console.log(this.postsService.getPosts());
  }
}
