import { UserService } from './../../services/user.service';
import { PostService } from './../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  private postId: number;
  private post: Post = new Post();

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private userService: UserService) { 
  }

  ngOnInit() {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPost();
  }

  isUserLoggedIn(): boolean {
    return this.userService.isUserLoggedIn();
  }

  getPost(): void {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      console.log(error);
    });
  }

  onLikeClick(): void {
    // @TODO: implement this
  }
  
  onDislikeClick(): void {
    // @TODO: implement this
  }
}
