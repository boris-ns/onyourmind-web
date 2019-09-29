import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersComponent } from './components/users/users.component';
import { AdminPostsComponent } from './components/admin-posts/admin-posts.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AddPostComponent } from './components/add-post/add-post.component';

import { HOME_PATH, LOGIN_PATH, REGISTRATION_PATH, 
  ADMIN_USERS_PATH, ADMIN_POSTS_PATH, MY_PROFILE_PATH, PROFILES_PATH_PARAMS,
  ADD_POST_PATH,
} from './config/router-paths';


const routes: Routes = [
  { path: HOME_PATH, component: HomeComponent },
  { path: LOGIN_PATH, component: LoginComponent },
  { path: REGISTRATION_PATH, component: RegistrationComponent },
  { path: ADMIN_USERS_PATH, component: UsersComponent },
  { path: ADMIN_POSTS_PATH, component: AdminPostsComponent },
  { path: MY_PROFILE_PATH, component: ProfileSettingsComponent },
  { path: PROFILES_PATH_PARAMS, component: ProfilePageComponent },
  { path: ADD_POST_PATH, component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
