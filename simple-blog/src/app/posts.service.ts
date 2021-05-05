import { Injectable } from '@angular/core';
import {Post} from './app.component';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  static readonly API_URL = `http://localhost:3000/posts`;

  constructor(private http: HttpClient) { }

  getPosts(limit = 30): Observable<Post[]> {
    return this.http.get<Post[]>(PostsService.API_URL, {
      params: new HttpParams().set('_limit', limit.toString())
    });
  }

  getPost(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(PostsService.API_URL + `/${id}`);
  }

}
