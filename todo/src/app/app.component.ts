import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo/todo.service';
import {Todo} from './todo/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo';
  constructor(private todoService: TodoService) {
    this.todoService = todoService;
  }

  ngOnInit(): any {
    this.todoService.getTodos().subscribe(todos => {
      console.log('todos', todos);
    });

    this.todoService.getTodo(12).subscribe(todos => {
      console.log('todo by id (12):', todos);
    });

    this.todoService.deleteTodo(15).subscribe(todos => {
      console.log('delete todo (15):', todos);
    });

    const newTodo = {title: 'make coffee'} as Todo;
    this.todoService.createTodo(newTodo).subscribe(todos => {
      console.log('create todo:', todos);
    });

    const updatedTodo = {completed: true} as Todo;
    this.todoService.updateTodo(200, updatedTodo).subscribe(todos => {
      console.log('update todo (200):', todos);
    });

    const overwritedTodo = {title: 'overwrited'} as Todo;
    this.todoService.updateTodo(201, overwritedTodo).subscribe(todos => {
      console.log('overwrited todo (201):', todos);
    });
  }
}

