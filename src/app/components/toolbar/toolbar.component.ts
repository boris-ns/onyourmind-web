import { USERNAME_KEY, USER_ID_KEY } from './../../config/local-storage-keys';
import { LOGIN_PATH, REGISTRATION_PATH, HOME_PATH, ADMIN_POSTS_PATH, ADMIN_USERS_PATH, MY_PROFILE_PATH, PROFILES_PATH } from './../../config/router-paths';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { 
  }

  ngOnInit() {
  }

  getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  isAdminLoggedIn(): boolean {
    return this.authService.isAdminLoggedIn();
  }

  onTitleClick(): void {
    this.router.navigate([HOME_PATH]);
  }

  onClickLogin(): void {
    this.router.navigate([LOGIN_PATH]);
  }

  onClickRegister(): void {
    this.router.navigate([REGISTRATION_PATH]);
  }

  onClickPosts(): void {
    this.router.navigate([ADMIN_POSTS_PATH])
  }

  onClickMyProfile(): void {
    const userId = localStorage.getItem(USER_ID_KEY);
    this.router.navigate([PROFILES_PATH, userId]);
  }

  onClickProfileSettings(): void {
    this.router.navigate([MY_PROFILE_PATH]);
  }

  onClickComments(): void {
    // @TODO: implement this
  }

  onClickUsers(): void {
    this.router.navigate([ADMIN_USERS_PATH]);
  }

  onClickLogout(): void {
    this.authService.logout();
    this.router.navigate([HOME_PATH]);
  }
}
