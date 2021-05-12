import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../posts.service';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-detail',
  template: `
    <div class="grid-container">
      <div></div>
      <mat-card>
        <div class="flex-container">
          <h1> {{article?.title}} </h1>
          <a [routerLink]="['']" routerLinkActive="active"> Back </a>
        </div>
        <h3> Author: {{article?.userId}} </h3>
        <p> {{article?.body}} </p>
      </mat-card>
    </div>
  `,
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  article: Post | undefined;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postsService.getPost(id).subscribe(article => {
      this.article = article;
      console.log(article);
    });
  }
}
