import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../app.component';
import {PostsService} from '../../posts.service';


@Component({
  selector: 'app-blog',
  template: `
    <ng-template #successTpl>
      <app-post-item [post]="post" *ngFor="let post of posts" [id]="post.id"></app-post-item>
    </ng-template>

    <ng-template #noItems >Test - no items yet.</ng-template>

    <div class = 'grid-container' *ngIf="posts?.length then successTpl; else noItems"> </div>
  `,
  styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {

  imgLink = 'https://picsum.photos/400/200';
  posts: Post[] | undefined = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

    this.postsService.getPost(12).subscribe(posts => {
      console.log('post by id (12):', posts);
    });
  }

}
