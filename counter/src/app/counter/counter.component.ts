import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output()
  counterToParent = new EventEmitter<number>();

  counter = 0;

  constructor() { }

  ngOnInit(): void {
      this.counterToParent.emit(this.counter);
  }

}
