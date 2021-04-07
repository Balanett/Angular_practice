import {Component, OnInit} from '@angular/core';
import { PostsService } from './posts.service';

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
export class AppComponent implements OnInit {
  title = 'simple-blog';
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }
}
