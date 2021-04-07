import { Injectable } from '@angular/core';
import {Post} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

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

  constructor() { }

  getPosts(): Post[] {
    console.log(this.posts);
    return this.posts;
  }
}
