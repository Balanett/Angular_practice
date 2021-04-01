import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';


@Component({
  selector: 'app-blog',
  template: `

    <div class = 'grid-container'>
        <app-post-item [post]="post" *ngFor="let post of posts" [id]="post.id"></app-post-item>
    </div>
  `,
  styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {

  imgLink = 'https://picsum.photos/400/200';

  @Input()
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.posts);
  }

}
