import { PostService } from './../../services/post.service';
import { HOME_PATH } from './../../config/router-paths';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postText: string = '';

  constructor(private router: Router,
              private postService: PostService,
              private toastr: ToastrService) { 
  }

  ngOnInit() {
  }

  onClickAddPost(): void {
    if (this.postText === '') {
      this.toastr.warning('Text can not be empty!');
      return;
    }

    this.postService.addPost(this.postText).subscribe(data => {
      this.toastr.success('Your post has been successfully added.');
      this.gotoHomePage();
    }, error => {
      this.toastr.error('There was an error while adding your post.');
    })
  }

  onClickCancel(): void {
    this.gotoHomePage();
  }

  gotoHomePage(): void {
    this.router.navigate([HOME_PATH]);
  }
}
