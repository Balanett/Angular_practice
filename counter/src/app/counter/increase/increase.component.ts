import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.css']
})
export class IncreaseComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
