import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<any> = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'username', 'email', 'enabled'];

  constructor(private userService: UserService,
              private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    }, error => {
      this.toastr.warning('There was an error while getting data about users.', 'Warning');
    })
  }

  onEnableSlideToggleChange(user): void {
    if (user.enabled) {
      this.userService.deactivateUser(user.id).subscribe(data => {
        user.enabled = false;
        this.toastr.success(`Account for ${user.firstName} ${user.lastName} was successfully deactivated`, 'Success');
      }, error => {
        this.toastr.warning(`There was an error while deactivating account for ${user.firstName} ${user.lastName}`, 'Warning');
      })
    } else {
      this.userService.activateUser(user.id).subscribe(data => {
        user.enabled = true;
        this.toastr.success(`Account for ${user.firstName} ${user.lastName} was successfully activated`, 'Success');
      }, error => {
        this.toastr.warning(`There was an error while activating account for ${user.firstName} ${user.lastName}`, 'Warning');
      })
    }
  }
}
