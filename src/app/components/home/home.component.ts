import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<any> = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    }, error => {
      console.log(error);
    });
  }

  onLikeClick(postId: number) {
    // @TODO: implement this
    console.log("LIKE " + postId);
  }

  onDislikeClick(postId: number) {
    // @TODO: implement this
    console.log("DISLIKE " + postId);
  }

  onCommentClick(postId: number) {
    // @TODO: implement this
    console.log("COMMENT " + postId);
  }
}
