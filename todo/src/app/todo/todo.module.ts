import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [TodoService]
})
export class TodoModule { }
