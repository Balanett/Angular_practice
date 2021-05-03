import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-detail',
  template: `
    <mat-card [id]="post.id" *ngIf="post">
      <mat-card-title> {{post.title}} </mat-card-title>
      <mat-card-content> {{post.body}} </mat-card-content>
      <a routerLink="/post"> Read more </a>
    </mat-card>
  `,
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
