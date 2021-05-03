import { Injectable } from '@angular/core';
import {Post} from './app.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  static readonly API_URL = `http://localhost:3000/posts`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(PostsService.API_URL);
  }

  getPost(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(PostsService.API_URL + `/${id}`);
  }

}
