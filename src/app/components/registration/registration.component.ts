import { LOGIN_PATH } from './../../config/router-paths';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  repeatPassword: string;

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {

  }

  ngOnInit() {
  }

  onClickRegister() {
    if (this.password !== this.repeatPassword) {
      this.toastr.warning('Passwords don\'t match', 'Warning');
      return;
    }

    const userInfo = new User(this.username, this.firstName, this.lastName, this.password, this.email);

    this.authService.registerUser(userInfo).subscribe(data => {
      this.toastr.success('You account is successfully created! Please sign in.');
      this.router.navigate([LOGIN_PATH]);
    }, error => {
      this.toastr.warning('Something went wrong with registration. Try again.', 'Warning');
    });
  }

  onClickSignIn() {
    this.router.navigate([LOGIN_PATH]);
  }
}
