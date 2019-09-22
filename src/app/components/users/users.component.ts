import { PROFILES_PATH } from './../../config/router-paths';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';
import { ROLE_ADMIN } from 'src/app/config/user-roles-keys';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'username', 'email', 'role', 'enabled', 'see-profile'];
  users = new MatTableDataSource([]);

  constructor(private userService: UserService,
              private toastr: ToastrService,
              private router: Router) { 
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = new MatTableDataSource(data);
    }, error => {
      this.toastr.warning('There was an error while getting data about users.', 'Warning');
    })
  }

  getUserRole(user: User): string {
    return (user.authorities[0] === ROLE_ADMIN) ? 'Admin' : 'User';
  }

  applyFilter(filterValue: string) {
    this.users.filter = filterValue.trim().toLowerCase();
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

  goToUsersProfile(userId: number): void {
    this.router.navigate([PROFILES_PATH, userId]);
  }
}
