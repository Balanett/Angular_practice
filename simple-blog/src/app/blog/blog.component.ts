import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';


@Component({
  selector: 'app-blog',
  template: `

    <div class = 'grid-container'>
      <mat-card class="mat-card" *ngFor="let post of posts" [id]="post.id">
        <img src="{{post.postImg}}" alt="PostIMG">
        <mat-card-title>{{post.title}}</mat-card-title>
        <mat-card-content>
          <p>{{post.body}}</p>
        </mat-card-content>
        <a mat-button href="#">Read more</a>
      </mat-card>
    </div>
  `,
  styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input()
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.posts);
  }

}
