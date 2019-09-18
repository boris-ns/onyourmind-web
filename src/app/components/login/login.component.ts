import { USER_ROLE_KEY, USERNAME_KEY, USER_TOKEN_KEY } from './../../config/local-storage-keys';
import { HOME_PATH } from './../../config/router-paths';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REGISTRATION_PATH } from 'src/app/config/router-paths';
import { USER_ID_KEY } from 'src/app/config/local-storage-keys';
import { LoginInfo } from 'src/app/models/login-info';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(public router: Router, 
              private authService: AuthService, 
              private toastr: ToastrService) { 
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
    const loginInfo = new LoginInfo(this.username, this.password);

    this.authService.login(loginInfo).subscribe(data => {
      localStorage.setItem(USER_ID_KEY, data.id);
      localStorage.setItem(USER_ROLE_KEY, data.authorities[0]);
      localStorage.setItem(USERNAME_KEY, data.username);
      localStorage.setItem(USER_TOKEN_KEY, data.token.accessToken);

      this.router.navigate([HOME_PATH]);
    }, error => {
      this.toastr.warning(error.error.message, 'Warning');
    });
  }

  onClickRegister() {
    this.router.navigate([REGISTRATION_PATH]);
  }
}
