import {Component, OnInit} from '@angular/core';
import {Post} from '../../app.component';
import {PostsService} from '../../posts.service';


@Component({
  selector: 'app-blog',
  template: `
    <div class="grid-container">
      <ng-template #successTpl >
        <app-post-item [post]="post" *ngFor="let post of posts" [id]="post.id"></app-post-item>
      </ng-template>

      <ng-template #unsuccessTpl >Error message: No items.</ng-template>

      <div class = 'grid-container' *ngIf="posts?.length then successTpl; else unsuccessTpl"> </div>
    </div>
  `,
  styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[] | undefined = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
