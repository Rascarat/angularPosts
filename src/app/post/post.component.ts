import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;

  likes: number = 0;
  createdAt = new Date();
  
  constructor() { }

  ngOnInit() {
  }

  addLike() {
    this.likes = this.likes + 1
    console.log('likes:'+ this.likes);
  }

  removeLike() {
    this.likes-=1;
  }
  getTitle() {
    return this.title;
  }
  getContent() {
    return this.content;
  }
}
