import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../app.component';

@Component({
  selector: 'app-post-item',
  template: `
    <mat-card [id]="post.id" *ngIf="post">
      <img [src]="imgLink" alt="Pics">
      <mat-card-title> {{post.title}} </mat-card-title>
      <mat-card-content> {{post.body}} </mat-card-content>
      <button mat-button> Read more </button>
    </mat-card>
  `,
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post | undefined;
  imgLink = 'https://picsum.photos/400/200';

  constructor() { }

  ngOnInit(): void {
  }

}