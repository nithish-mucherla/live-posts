import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  constructor(private postService: PostService, private router: Router) {}

  postForm = new FormGroup({});

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      imageUrl: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.postForm);
    if (this.postForm.invalid) {
      alert('please fill all details');
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    const imageUrl = this.postForm.value.imageUrl;
    const author = 'test@test.com';
    const date = new Date();

    this.postService.addPost(
      new Post(title, description, imageUrl, author, date)
    );
    this.router.navigate(['/post-list']);
  }
}
