import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UsersComponent } from './components/users/users.component';
import { AddTokenInterceptor } from './config/http-interceptor';
import { AdminPostsComponent } from './components/admin-posts/admin-posts.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostPageComponent } from './components/post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    ToolbarComponent,
    UsersComponent,
    AdminPostsComponent,
    ProfileSettingsComponent,
    ProfilePageComponent,
    AddPostComponent,
    PostPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
