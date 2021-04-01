import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  static readonly APIurl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TodoService.APIurl);
  }

  getTodo(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(TodoService.APIurl + `/${id}`);
  }

  deleteTodo(id: number): Observable<Todo[]> {
    return this.http.delete<Todo[]>(TodoService.APIurl + `/${id}`);
  }

  createTodo(todo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(TodoService.APIurl, todo);
  }

  updateTodo(id: number, todo: Todo): Observable<Todo[]> {
    return this.http.patch<Todo[]>(TodoService.APIurl + `/${id}`, todo);
  }

  overwriteTodo(id: number, todo: Todo): Observable<Todo[]> {
    return this.http.put<Todo[]>(TodoService.APIurl + `/${id}`, todo);
  }
}


