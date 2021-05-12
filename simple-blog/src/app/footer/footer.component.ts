import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `
    <div class="flex-container">
      <a [routerLink]="['']" routerLinkActive="active"> Home </a>
      <a [routerLink]="['page']" routerLinkActive="active"> Terms & Conditions </a>
      <a [routerLink]="['page']" routerLinkActive="active"> About Us </a>
      <a [routerLink]="['contact']" routerLinkActive="active"> Contact </a>
    </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
