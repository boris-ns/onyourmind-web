import { ADD_POST_PATH } from './../../config/router-paths';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<any> = [];

  constructor(private postService: PostService,
              private userService: UserService,
              private router: Router) { 
  }

  ngOnInit() {
    this.getAllPosts();
  }

  isUserLoggedIn(): boolean {
    return this.userService.isUserLoggedIn();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    }, error => {
      console.log(error);
    });
  }

  onLikeClick(postId: number): void {
    // @TODO: implement this
    console.log("LIKE " + postId);
  }

  onDislikeClick(postId: number): void {
    // @TODO: implement this
    console.log("DISLIKE " + postId);
  }

  onCommentClick(postId: number): void {
    // @TODO: implement this
    console.log("COMMENT " + postId);
  }

  onClickBtnAddPost(): void {
    this.router.navigate([ADD_POST_PATH]);
  }
}
