import { UserService } from './../../services/user.service';
import { PostService } from './../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  private postId: number;
  private post: Post = new Post();
  commentText: string = '';

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private userService: UserService,
              private toastr: ToastrService) { 
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
      this.toastr.error('There was an error while getting the information about the post.');
    });
  }

  onLikeClick(): void {
    // @TODO: implement this
  }
  
  onDislikeClick(): void {
    // @TODO: implement this
  }

  onAddCommentClick(): void {
    this.postService.addComment(this.postId, this.commentText).subscribe(data => {
      this.commentText = '';
      this.post.comments.push(data);
      this.toastr.success('Comment was successfully added.');
    }, error => {
      this.toastr.error('There was an error while adding new comment.');
    });
  }
}
