import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-detail',
  template: `
    <h1>Nem inputon keresztül érkezik a post, le kell kérni az útvonalból az id-t. - post service használata</h1>
  `,
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
