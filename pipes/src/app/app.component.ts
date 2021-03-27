import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  words = 'foo bar baz';
  str = 'lorem ipsum';
  names = ['John', 'Sebastian', 'Will', 'James'];
  nums = [1, 2, 3, 4, 5];
}
