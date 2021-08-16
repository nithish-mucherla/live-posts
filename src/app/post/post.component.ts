import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() postIndex: number = -1;
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onDelete() {
    console.log(this.postIndex);
    this.postService.deletePost(this.postIndex);
  }
}
