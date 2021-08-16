import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor(private postService: PostService) {}

  listOfPosts: Post[] = [];
  ngOnInit(): void {
    this.listOfPosts = this.postService.getPosts();
  }
}
