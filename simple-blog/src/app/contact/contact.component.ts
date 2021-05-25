import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <h1> Contact </h1>
    <form #contactForm="ngForm" (submit)="onSubmit(contactForm)" >

      <label for="name">Name: </label> <br>
      <input type="text" name="name" id="name" size="36" ngModel>
      <br>

      <label for="email">E-mail: </label> <br>
      <input type="email" name="email" id="email" size="36" ngModel>
      <br>

      <label for="message">Message: </label> <br>
      <textarea name="message" id="message" cols="30" rows="10" ngModel></textarea>
      <br>
      <br>

      <input type="checkbox" name="tac" id="tac" [ngModel]="true">
      <label for="tac">I accept Terms & Conditions </label>
      <br>
      <br>

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>

    </form>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
