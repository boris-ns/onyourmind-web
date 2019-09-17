import { USER_ROLE_KEY, USERNAME_KEY, USER_TOKEN } from './../../config/local-storage-keys';
import { HOME_PATH } from './../../config/router-paths';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REGISTRATION_PATH } from 'src/app/config/router-paths';
import { USER_ID_KEY } from 'src/app/config/local-storage-keys';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(public router: Router, private authService: AuthService) { 
  }

  ngOnInit() {
    if (this.checkIfUserLoggedIn()) {
      this.router.navigate([HOME_PATH]);
    }
  }

  checkIfUserLoggedIn() {
    return localStorage.getItem(USER_ID_KEY) != null;
  }

  onClickLogin() {
    const loginInfo = {
      username: this.username,
      password: this.password
    };
    
    this.authService.login(loginInfo).subscribe(data => {
      // @TODO: refactor this!! create models
      localStorage.setItem(USER_ID_KEY, data.id);
      localStorage.setItem(USER_ROLE_KEY, data.authorities[0]);
      localStorage.setItem(USERNAME_KEY, data.username);
      localStorage.setItem(USER_TOKEN, data.token.accessToken);

      this.router.navigate([HOME_PATH]);
    });
  }

  onClickRegister() {
    this.router.navigate([REGISTRATION_PATH]);
  }
}
