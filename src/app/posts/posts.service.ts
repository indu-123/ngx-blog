import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public http: HttpClient) { 

  }

  getPosts(): Observable<Post[]>{
    return this.http.get('api/posts').pipe(
        map((data: any) => {
          return data._embedded.posts as Post[];
        })
      );
  }
}
