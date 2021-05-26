import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <h1> Contact </h1>
    <form #contactForm="ngForm" (submit)="onSubmit(contactForm)" >

      <label for="name">Name: </label> <br>
      <input type="text" #name="ngModel" name="name" id="name" size="36"
             ngModel required minlength="6">
      <div class="error" *ngIf="name.invalid && !name.value && name.touched">
        Please fill your name! </div>
      <div class="error" *ngIf="name.invalid && name.value.length <= 6 && name.value.length >= 1 &&
      name.touched">
        Please fill your name with minimum 6 characters!</div>

      <br>
      <br>

      <label for="email">E-mail: </label> <br>
      <input type="email" #email="ngModel" name="email" id="email" size="36" ngModel required>
      <div class="error" *ngIf="email.invalid && !email.value && email.touched">
        Please fill your email! </div>

      <br>
      <br>

      <label for="message">Message: </label> <br>
      <textarea #message="ngModel" name="message" id="message" cols="30" rows="10" ngModel required minlength="100">
      </textarea>
      <div class="error" *ngIf="message.invalid && !message.value && message.touched">
        Please fill your message! </div>
      <div class="error" *ngIf="message.invalid && message.value.length <= 100 && message.value.length >= 1 && message.touched">
        Please fill your message with minimum 100 characters! </div>

      <br>
      <br>

      <input type="checkbox" name="tac" id="tac" [ngModel]="true" required>
      <label for="tac">I accept Terms & Conditions </label>

      <br>
      <br>

      <button type="submit" [disabled]="contactForm.form.invalid" >Submit</button>
      <button type="reset">Reset</button>

    </form>

    <code>
      {{contactForm.value | json}}
    </code>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const message = form.value
    console.log(message);
  }
}
