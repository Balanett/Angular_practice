import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-tasks';
  showMsg = true;
  showMsgText = 'Use your code for good';
  showErrorText = 'Message is hide';
  textAlign = 'center';
  Passengers = [
    {
      fullName: 'John Doe',
      dateOfBirth: 1992 - 5 - 5,
      gender: 'male',
      checkedIn: true
    },
    {
      fullName: 'Jane Doe',
      dateOfBirth: 1990 - 10 - 8,
      gender: 'female',
      checkedIn: false
    },
    {
      fullName: 'John Connor',
      dateOfBirth: 2000 - 10 - 8,
      gender: 'male',
      checkedIn: true
    }
  ];
}
