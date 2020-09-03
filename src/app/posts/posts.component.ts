import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]>
  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.posts = this.service.getPosts();
  }

}
