import { USERNAME_KEY } from './../../config/local-storage-keys';
import { LOGIN_PATH, REGISTRATION_PATH, HOME_PATH } from './../../config/router-paths';
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
    // @TODO: Implement this
  }

  onClickComments(): void {
    // @TODO: implement this
  }

  onClickUsers(): void {
    // @TODO: implement this
  }

  onClickLogout(): void {
    this.authService.logout();
    this.router.navigate([HOME_PATH]);
  }
}
