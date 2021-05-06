import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  template: `
    <h1>Template Post</h1>
  `,
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const POST_URL = `http://localhost:3000/posts` + `/${(id)}`;
    console.log('post URL:', POST_URL);
  }
}
