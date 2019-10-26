import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  
  // @TODO: refactor this
  user: User = new User('', '', '', '', '', '', []);

  password: string = '';
  repeatPassword: string = '';

  constructor(private userService: UserService,
              private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.getUserInfo();
  }

  private getUserInfo(): void {
    this.userService.getUserInfo().subscribe(data => {
      this.user = data;
    }, error => {
      this.toastr.error('There was an error while getting data about user', 'Error');
    });
  }
}
