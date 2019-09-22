import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  // @TODO: Refactor this
  user: User = new User('', '', '', '', '', []);

  private userId: number;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.userService.getUser(this.userId).subscribe(data => {
      this.user = data;
    }, error => {
      this.toastr.error('Error while getting data about user');
    });
  }
}
