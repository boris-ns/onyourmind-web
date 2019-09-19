import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'authorName', 'text', 'likes', 'dislikes', 'dateTime', 'enabled'];
  dataSource = new MatTableDataSource([]);

  constructor(private postService: PostService,
              private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    }, error => {
      this.toastr.error('There was an error while getting posts from server.', 'Error');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEnableSlideToggleChange(post): void {
    if (post.enabled) {
      this.postService.deactivatePost(post.id).subscribe(data => {
        post.enabled = false;
        this.toastr.success(`Post with ID ${post.id} was successfully deactivated`, 'Success');
      }, error => {
        this.toastr.error(`There was an error while deactivating post with ID ${post.id}`, 'Error');
      })
    } else {
      this.postService.activatePost(post.id).subscribe(data => {
        post.enabled = true;
        this.toastr.success(`Post with ID ${post.id} was successfully activated`, 'Success');
      }, error => {
        this.toastr.error(`There was an error while activating post with ID ${post.id}`, 'Error');
      })
    }
  }
}
