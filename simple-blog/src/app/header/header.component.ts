import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar [color]="'primary'">
      <span>Simple Blog</span>
    </mat-toolbar>
  `,
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
