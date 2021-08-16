export class Post {
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public author: string,
    public datetime: Date
  ) {}
}
