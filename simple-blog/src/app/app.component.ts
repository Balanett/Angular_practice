import {Component, OnInit} from '@angular/core';
import { PostsService } from './posts.service';

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
    <app-blog [posts]="posts"></app-blog>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-blog';
  posts: Post[] | undefined;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
