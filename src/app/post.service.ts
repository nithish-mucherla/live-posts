import { Injectable } from '@angular/core';
import { Post } from './post/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPosts: Post[] = [
    new Post(
      'Grid OverView',
      `Rows must be placed within a .container (fixed-width) or .container-fluid
          (full-width) for proper alignment and padding Use rows to create horizontal
          groups of columns Content should be placed within columns, and only columns
          may be immediate children of rows Predefined classes like .row and .col-sm-4
          are available for quickly making grid layouts Columns create gutters (gaps
          between column content) via padding. That padding is offset in rows for the
          first and last column via negative margin on .rows Grid columns are created by
          specifying the number of 12 available columns you wish to span. For example,
          three equal columns would use three .col-sm-4 Column widths are in percentage,
          so they are always fluid and sized relative to their parent element`,
      `https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg`,
      'Nithish',
      new Date()
    ),
    new Post(
      'Grid OverView Part-2',
      `Rows must be placed within a .container (fixed-width) or .container-fluid
          (full-width) for proper alignment and padding Use rows to create horizontal
          groups of columns Content should be placed within columns, and only columns
          may be immediate children of rows Predefined classes like .row and .col-sm-4
          are available for quickly making grid layouts Columns create gutters (gaps
          between column content) via padding. That padding is offset in rows for the
          first and last column via negative margin on .rows Grid columns are created by
          specifying the number of 12 available columns you wish to span. For example,
          three equal columns would use three .col-sm-4 Column widths are in percentage,
          so they are always fluid and sized relative to their parent element`,
      `https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg`,
      'Nithish',
      new Date()
    ),
  ];

  getPosts() {
    return this.listOfPosts;
  }

  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  addPost(post: Post) {
    console.log(post);
    this.listOfPosts.push(post);
  }
}
