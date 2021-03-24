import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';

  dataFromCounter: number | undefined;

  handleOutput(data: number): void {
    this.dataFromCounter = data;
  }

}
